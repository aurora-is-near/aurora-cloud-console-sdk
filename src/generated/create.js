"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestFunction = void 0;
var axios_1 = __importDefault(require("axios"));
var change_case_1 = require("change-case");
var request_1 = require("./request");
var interceptors_1 = require("./interceptors");
var query_1 = require("./query");
var DEFAULT_REFRESH_STATUS_CODES = [401];
var DEFAULT_REQUEST_TIMEOUT = 15000;
/**
 * Create the base axios instance.
 */
var createAxiosInstance = function (_a, version, title) {
    var baseURL = _a.baseURL, refreshAccessToken = _a.refreshAccessToken, onError = _a.onError, onClientError = _a.onClientError, onTimeoutError = _a.onTimeoutError, onRequest = _a.onRequest, _b = _a.paramsSerializer, paramsSerializer = _b === void 0 ? query_1.serializeQueryParams : _b, userAgent = _a.userAgent, appVersion = _a.appVersion, _c = _a.refreshStatusCodes, refreshStatusCodes = _c === void 0 ? DEFAULT_REFRESH_STATUS_CODES : _c, _d = _a.timeout, timeout = _d === void 0 ? DEFAULT_REQUEST_TIMEOUT : _d;
    if (!baseURL) {
        throw new Error('A `baseURL` must be given');
    }
    var headers = {
        'Content-Type': 'application/json',
        Accept: "application/vnd.".concat((0, change_case_1.noCase)(title).replace(/\s+/g, ''), "+json; version=").concat(version),
    };
    if (userAgent) {
        headers['User-Agent'] = userAgent;
    }
    if (appVersion) {
        headers['X-App-Version'] = appVersion;
    }
    var axiosInstance = axios_1.default.create({
        baseURL: baseURL,
        headers: headers,
        paramsSerializer: paramsSerializer,
        timeout: typeof timeout === 'number' ? timeout : undefined,
    });
    if (typeof timeout === 'object') {
        axiosInstance.interceptors.request.use((0, interceptors_1.timeoutInterceptor)(timeout));
    }
    var refreshTokenInterceptor = (0, interceptors_1.createRefreshTokenInterceptor)(refreshStatusCodes, refreshAccessToken);
    var econnresetInterceptor = (0, interceptors_1.createEconnresetInterceptor)();
    var responseDebugInterceptor = (0, interceptors_1.createResponseDebugInterceptor)(onError, onClientError, onTimeoutError);
    axiosInstance.interceptors.response.use(refreshTokenInterceptor.success, refreshTokenInterceptor.error);
    axiosInstance.interceptors.response.use(econnresetInterceptor.success, econnresetInterceptor.error);
    axiosInstance.interceptors.response.use(responseDebugInterceptor.success, responseDebugInterceptor.error);
    if (onRequest) {
        var requestDebugInterceptor = (0, interceptors_1.createRequestDebugInterceptor)(paramsSerializer, onRequest);
        axiosInstance.interceptors.request.use(requestDebugInterceptor.success, requestDebugInterceptor.error);
    }
    return axiosInstance;
};
/**
 * Get the function for making API requests for a particular client.
 */
var getRequestFunction = function (title, version, options) {
    var axiosInstance = createAxiosInstance(options, version, title);
    return (0, request_1.createRequestFunction)(axiosInstance, options.basePath, options.getAccessToken, options.refreshAccessToken);
};
exports.getRequestFunction = getRequestFunction;
