"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestDebugInterceptor = void 0;
/**
 * Axios interceptor to log requests.
 */
var createRequestDebugInterceptor = function (paramsSerializer, onRequest) { return ({
    success: function (config) {
        var baseURL = config.baseURL, method = config.method, url = config.url, params = config.params;
        if (!url || !method) {
            return config;
        }
        var urlObj = new URL(url, baseURL);
        if (params) {
            urlObj.search = "?".concat(paramsSerializer(params));
        }
        onRequest({
            method: method.toUpperCase(),
            url: urlObj,
        });
        return config;
    },
    error: function (error) { return Promise.reject(error); },
}); };
exports.createRequestDebugInterceptor = createRequestDebugInterceptor;
