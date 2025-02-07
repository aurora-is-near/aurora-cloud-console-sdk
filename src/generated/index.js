"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenApiClientTimeoutError = exports.isOpenApiClientTimeoutError = exports.OpenApiClientError = exports.isOpenApiClientError = void 0;
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
__exportStar(require("./generated"), exports);
var errors_1 = require("./errors");
Object.defineProperty(exports, "isOpenApiClientError", { enumerable: true, get: function () { return errors_1.isOpenApiClientError; } });
Object.defineProperty(exports, "OpenApiClientError", { enumerable: true, get: function () { return errors_1.OpenApiClientError; } });
Object.defineProperty(exports, "isOpenApiClientTimeoutError", { enumerable: true, get: function () { return errors_1.isOpenApiClientTimeoutError; } });
Object.defineProperty(exports, "OpenApiClientTimeoutError", { enumerable: true, get: function () { return errors_1.OpenApiClientTimeoutError; } });
