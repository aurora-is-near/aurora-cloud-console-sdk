import { AxiosError, AxiosResponse } from 'axios';
import { OpenApiClientError, OpenApiClientTimeoutError, ValidationError } from '../errors';
type ResponseError = AxiosError<{
    message?: string;
    type?: string;
    errors?: ValidationError[];
}, {
    method: string;
    url: string;
    baseURL: string;
}> & {
    statusCode: number;
};
export declare const createResponseDebugInterceptor: (onError?: (error: OpenApiClientError) => void, onClientError?: (error: OpenApiClientError) => void, onTimeoutError?: (error: OpenApiClientTimeoutError) => void) => {
    success: (res: AxiosResponse) => AxiosResponse<any, any>;
    error: (error: ResponseError) => never;
};
export {};
//# sourceMappingURL=response-debug-interceptor.d.ts.map