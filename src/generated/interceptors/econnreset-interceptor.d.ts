import { AxiosError, AxiosResponse } from 'axios';
declare module 'axios' {
    interface InternalAxiosRequestConfig {
        _econnresetRetry?: boolean;
    }
}
/**
 * Axios interceptor to retry ECONNRESET errors once.
 *
 * @see https://github.com/node-modules/agentkeepalive/blob/01e61e9/README.md#support-reqreusedsocket
 */
export declare const createEconnresetInterceptor: () => {
    success: (res: AxiosResponse) => AxiosResponse<any, any>;
    error: (error: AxiosError) => Promise<AxiosResponse<any, any>>;
};
//# sourceMappingURL=econnreset-interceptor.d.ts.map