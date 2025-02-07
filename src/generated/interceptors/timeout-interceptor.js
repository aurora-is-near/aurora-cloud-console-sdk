"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutInterceptor = void 0;
var timeoutInterceptor = function (timeout) { return function (config) {
    var _a, _b;
    var method = (_b = (_a = config.method) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
    if (method in timeout) {
        config.timeout = timeout[method];
        return config;
    }
    return config;
}; };
exports.timeoutInterceptor = timeoutInterceptor;
