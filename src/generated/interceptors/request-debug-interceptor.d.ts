import { CustomParamsSerializer, InternalAxiosRequestConfig } from 'axios';
export type OnRequestFunction = ({ method, url, }: {
    method: string;
    url: URL;
}) => void;
/**
 * Axios interceptor to log requests.
 */
export declare const createRequestDebugInterceptor: (paramsSerializer: CustomParamsSerializer, onRequest: OnRequestFunction) => {
    success: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig<any>;
    error: (error: unknown) => Promise<never>;
};
//# sourceMappingURL=request-debug-interceptor.d.ts.map