"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponseDebugInterceptor = void 0;
var errors_1 = require("../errors");
var createResponseDebugInterceptor = function (onError, onClientError, onTimeoutError) { return ({
    success: function (res) { return res; },
    error: function (error) {
        var _a;
        var config = error.config, response = error.response, message = error.message, statusCode = error.statusCode, code = error.code;
        var _b = config !== null && config !== void 0 ? config : {}, url = _b.url, method = _b.method, baseURL = _b.baseURL;
        var _c = response !== null && response !== void 0 ? response : {}, data = _c.data, status = _c.status;
        var finalStatus = status !== null && status !== void 0 ? status : statusCode;
        var isFiniteStatus = Number.isFinite(finalStatus);
        var isServerError = isFiniteStatus && finalStatus >= 500;
        var isClientError = isFiniteStatus && finalStatus >= 400 && finalStatus < 500;
        var isTimeoutError = code === 'ETIMEDOUT' || code === 'ECONNABORTED';
        var endpoint = "/".concat(url).replace(/\/\//g, '/');
        var fullUrl = "".concat(baseURL).concat(endpoint);
        var msg = "".concat(finalStatus, " ").concat((_a = data === null || data === void 0 ? void 0 : data.message) !== null && _a !== void 0 ? _a : message, " <").concat(method === null || method === void 0 ? void 0 : method.toUpperCase(), " ").concat(fullUrl, ">");
        var openApiClientError = new errors_1.OpenApiClientError(finalStatus, msg, {
            type: data === null || data === void 0 ? void 0 : data.type,
            errors: data === null || data === void 0 ? void 0 : data.errors,
        });
        /* eslint-disable no-console */
        var logError = onError !== null && onError !== void 0 ? onError : console.error;
        var logClientError = onClientError !== null && onClientError !== void 0 ? onClientError : console.warn;
        var logTimeoutError = onTimeoutError !== null && onTimeoutError !== void 0 ? onTimeoutError : console.warn;
        /* eslint-enable no-console */
        if (isTimeoutError) {
            // Axios returns the timeout as code NOT statusCode
            var openApiTimeoutError = new errors_1.OpenApiClientTimeoutError(message, code);
            logTimeoutError(openApiTimeoutError);
            throw openApiTimeoutError;
        }
        if (isServerError) {
            logError(openApiClientError);
        }
        if (isClientError) {
            logClientError(openApiClientError);
        }
        throw openApiClientError;
    },
}); };
exports.createResponseDebugInterceptor = createResponseDebugInterceptor;
