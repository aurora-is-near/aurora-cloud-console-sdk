"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEconnresetInterceptor = void 0;
var axios_1 = __importDefault(require("axios"));
/**
 * Axios interceptor to retry ECONNRESET errors once.
 *
 * @see https://github.com/node-modules/agentkeepalive/blob/01e61e9/README.md#support-reqreusedsocket
 */
var createEconnresetInterceptor = function () { return ({
    success: function (res) { return res; },
    error: function (error) {
        var config = error.config, request = error.request, code = error.code;
        var reusedSocket = (request || {}).reusedSocket;
        if (reusedSocket &&
            code === 'ECONNRESET' &&
            config &&
            !config._econnresetRetry) {
            config._econnresetRetry = true;
            return (0, axios_1.default)(config);
        }
        return Promise.reject(error);
    },
}); };
exports.createEconnresetInterceptor = createEconnresetInterceptor;
