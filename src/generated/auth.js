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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthorizationHeader = void 0;
var jwt_decode_1 = __importDefault(require("jwt-decode"));
var errors_1 = require("./errors");
/**
 * Get a property from the access token.
 */
var getTokenProperty = function (accessToken, key) {
    try {
        return (0, jwt_decode_1.default)(accessToken)[key];
    }
    catch (err) {
        // Failed to decode token, ignore.
        return null;
    }
};
/**
 * Check if the user has the admin role.
 */
var isUserAdmin = function (accessToken) {
    var role = getTokenProperty(accessToken, 'role');
    var adminRole = 'wp-admin';
    if (!role) {
        return false;
    }
    return (role === adminRole || (Array.isArray(role) && role.includes(adminRole)));
};
/**
 * Check if an access token has expired.
 */
var isTokenExpired = function (accessToken) {
    var exp = getTokenProperty(accessToken, 'exp');
    var timeNow = new Date().getTime() / 1000;
    if (typeof exp !== 'number') {
        return true;
    }
    return exp < timeNow;
};
/**
 * Throw a 401 Unauthorized error.
 */
var throwUnauthorizedError = function (message, url) {
    throw new errors_1.OpenApiClientError(401, "".concat(message, " <").concat(url, ">"));
};
function assertDefined(errorMessage, url, value) {
    if (!value) {
        throwUnauthorizedError(errorMessage, url);
    }
}
var getRefreshedAccessToken = function (url, refreshAccessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var refreshedToken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                assertDefined('Authorization is required but there is no valid access token and no `refreshAccessToken()` function was provided', url, refreshAccessToken);
                return [4 /*yield*/, refreshAccessToken()];
            case 1:
                refreshedToken = _a.sent();
                assertDefined('Authorization is required but there is no valid access token and nothing was returned from `refreshAccessToken()`', url, refreshedToken);
                return [2 /*return*/, refreshedToken];
        }
    });
}); };
/**
 * Get the bearer authorization header.
 */
var getAuthorizationHeader = function (url, secure, getAccessToken, refreshAccessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var noop, accessToken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (secure) {
                    assertDefined('Authorization is required but no `getAccessToken()` function was provided', url, getAccessToken);
                }
                noop = function () { return null; };
                return [4 /*yield*/, (getAccessToken !== null && getAccessToken !== void 0 ? getAccessToken : noop)()];
            case 1:
                accessToken = _a.sent();
                if (!secure && (!accessToken || !isUserAdmin(accessToken))) {
                    return [2 /*return*/, null];
                }
                if (!!accessToken) return [3 /*break*/, 3];
                return [4 /*yield*/, getRefreshedAccessToken(url, refreshAccessToken)];
            case 2:
                accessToken = _a.sent();
                _a.label = 3;
            case 3:
                // If the user is an admin and their token has expired but the route was not
                // secure anyway then we can still go ahead and make the request.
                if (!secure && isTokenExpired(accessToken)) {
                    return [2 /*return*/, null];
                }
                if (!isTokenExpired(accessToken)) return [3 /*break*/, 5];
                return [4 /*yield*/, getRefreshedAccessToken(url, refreshAccessToken)];
            case 4:
                accessToken = _a.sent();
                if (isTokenExpired(accessToken)) {
                    throwUnauthorizedError('Authorization is required but the access token has expired and `refreshAccessToken()` also returned an expired token', url);
                }
                _a.label = 5;
            case 5: return [2 /*return*/, "Bearer ".concat(accessToken)];
        }
    });
}); };
exports.getAuthorizationHeader = getAuthorizationHeader;
