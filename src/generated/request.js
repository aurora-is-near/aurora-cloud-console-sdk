"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestFunction = void 0;
var auth_1 = require("./auth");
/**
 * Slot path parameters into an endpoint.
 */
var populateEndpoint = function (endpoint, options) {
    var populatedEndpoint = endpoint;
    if (options === null || options === void 0 ? void 0 : options.params) {
        Object.entries(options.params)
            .filter(function (_a) {
            var value = _a[1];
            return value != null && value !== '';
        })
            .forEach(function (_a) {
            var key = _a[0], value = _a[1];
            populatedEndpoint = populatedEndpoint.replace(new RegExp("{".concat(key, "}")), String(value));
        });
    }
    var remainingMatches = populatedEndpoint.match(/\{.*\}/g);
    if (remainingMatches === null || remainingMatches === void 0 ? void 0 : remainingMatches.length) {
        throw new Error("Missing required path parameter(s): ".concat(remainingMatches.join(', ')));
    }
    return populatedEndpoint;
};
var trimSlashes = function (endpoint) {
    return endpoint.replace(/\/+$/, '').replace(/^\/+/, '');
};
var getFullPath = function (endpoint, basePath) {
    return basePath
        ? "/".concat(trimSlashes(basePath), "/").concat(trimSlashes(endpoint))
        : endpoint;
};
/**
 * Create the request function that is passed to the operations file.
 */
var createRequestFunction = function (axiosInstance, basePath, getAccessToken, refreshAccessToken) {
    return function (operationConfig, options) { return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, method, secure, url, axiosRequestConfig, authorization, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = operationConfig.endpoint, method = operationConfig.method, secure = operationConfig.secure;
                    url = getFullPath(populateEndpoint(endpoint, options), basePath);
                    axiosRequestConfig = {
                        url: url,
                        method: method,
                    };
                    if ((options === null || options === void 0 ? void 0 : options.data) && Object.keys(options.data).length) {
                        axiosRequestConfig.data = options.data;
                    }
                    if ((options === null || options === void 0 ? void 0 : options.query) && Object.keys(options.query).length) {
                        axiosRequestConfig.params = options.query;
                    }
                    return [4 /*yield*/, (0, auth_1.getAuthorizationHeader)(url, secure, getAccessToken, refreshAccessToken)];
                case 1:
                    authorization = _a.sent();
                    if (authorization) {
                        axiosRequestConfig.headers = { Authorization: authorization };
                    }
                    return [4 /*yield*/, axiosInstance.request(axiosRequestConfig)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
            }
        });
    }); };
};
exports.createRequestFunction = createRequestFunction;
