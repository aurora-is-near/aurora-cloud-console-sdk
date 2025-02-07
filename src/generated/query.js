"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryParams = void 0;
var qs_1 = __importDefault(require("qs"));
var serializeQueryParams = function (params) {
    return qs_1.default.stringify(params, {
        encodeValuesOnly: true,
        arrayFormat: 'brackets',
    });
};
exports.serializeQueryParams = serializeQueryParams;
