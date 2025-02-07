"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOpenApiClientTimeoutError = exports.OpenApiClientTimeoutError = exports.isOpenApiClientError = exports.OpenApiClientError = void 0;
var BaseOpenApiClientError = /** @class */ (function (_super) {
    __extends(BaseOpenApiClientError, _super);
    function BaseOpenApiClientError(message, code) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        return _this;
    }
    return BaseOpenApiClientError;
}(Error));
var OpenApiClientError = /** @class */ (function (_super) {
    __extends(OpenApiClientError, _super);
    function OpenApiClientError(statusCode, message, _a) {
        var _b = _a === void 0 ? {} : _a, errors = _b.errors, type = _b.type;
        var _this = this;
        var code = statusCode >= 500 ? 'EHTTPSERVER' : 'EHTTPCLIENT';
        _this = _super.call(this, "".concat(message).concat((errors === null || errors === void 0 ? void 0 : errors.length)
            ? " ".concat(errors === null || errors === void 0 ? void 0 : errors.map(function (err) { return "".concat(err.message, " (").concat(err.property, " ").concat(err.constraint, ")"); }).join(', '))
            : ''), code) || this;
        _this.isOpenApiClientError = true;
        _this.statusCode = statusCode;
        _this.name = 'OpenApiClientError';
        _this.errors = errors;
        _this.type = type;
        return _this;
    }
    return OpenApiClientError;
}(BaseOpenApiClientError));
exports.OpenApiClientError = OpenApiClientError;
/**
 * Determines whether a value is (probably) an error thrown by the API client.
 */
var isOpenApiClientError = function (value) {
    return typeof value === 'object' && !!value && 'isOpenApiClientError' in value;
};
exports.isOpenApiClientError = isOpenApiClientError;
var OpenApiClientTimeoutError = /** @class */ (function (_super) {
    __extends(OpenApiClientTimeoutError, _super);
    function OpenApiClientTimeoutError(message, code) {
        var _this = _super.call(this, message, code) || this;
        _this.isOpenApiClientTimeoutError = true;
        _this.name = 'OpenApiClientTimeoutError';
        _this.code = code;
        return _this;
    }
    return OpenApiClientTimeoutError;
}(BaseOpenApiClientError));
exports.OpenApiClientTimeoutError = OpenApiClientTimeoutError;
/**
 * Determines whether a value is (probably) a timeout error thrown by the API client.
 */
var isOpenApiClientTimeoutError = function (value) {
    return typeof value === 'object' &&
        !!value &&
        'isOpenApiClientTimeoutError' in value;
};
exports.isOpenApiClientTimeoutError = isOpenApiClientTimeoutError;
