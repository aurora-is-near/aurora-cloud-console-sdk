export type ValidationError = {
    property: string;
    constraint: string;
    message: string;
};
type OpenApiClientErrorOptions = {
    type?: string;
    errors?: ValidationError[];
};
export type OpenApiClientTimeoutErrorCode = 'ECONNABORTED' | 'ETIMEDOUT';
type OpenApiClientErrorCode = 'EHTTPCLIENT' | 'EHTTPSERVER';
type ErrorCodes = OpenApiClientTimeoutErrorCode | OpenApiClientErrorCode;
declare class BaseOpenApiClientError extends Error {
    code: ErrorCodes;
    constructor(message: string, code: ErrorCodes);
}
export declare class OpenApiClientError extends BaseOpenApiClientError {
    statusCode: number;
    type?: string;
    errors?: ValidationError[];
    isOpenApiClientError: boolean;
    constructor(statusCode: number, message: string, { errors, type }?: OpenApiClientErrorOptions);
}
/**
 * Determines whether a value is (probably) an error thrown by the API client.
 */
export declare const isOpenApiClientError: (value: unknown) => value is OpenApiClientError;
export declare class OpenApiClientTimeoutError extends BaseOpenApiClientError {
    isOpenApiClientTimeoutError: boolean;
    constructor(message: string, code: OpenApiClientTimeoutErrorCode);
}
/**
 * Determines whether a value is (probably) a timeout error thrown by the API client.
 */
export declare const isOpenApiClientTimeoutError: (value: unknown) => value is OpenApiClientTimeoutError;
export {};
//# sourceMappingURL=errors.d.ts.map