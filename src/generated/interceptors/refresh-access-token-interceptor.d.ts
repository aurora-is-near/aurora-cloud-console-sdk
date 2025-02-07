import { AxiosError, AxiosResponse } from 'axios';
import { TokenRetrieverFunction } from '../auth';
declare module 'axios' {
    interface InternalAxiosRequestConfig {
        _retry?: boolean;
    }
}
/**
 * Axios interceptor to retry a request after refreshing an access token.
 */
export declare const createRefreshTokenInterceptor: (refreshStatusCodes: number[], refreshAccessToken?: TokenRetrieverFunction) => {
    success: (res: AxiosResponse) => AxiosResponse<any, any>;
    error: (error: AxiosError) => Promise<AxiosResponse<any, any>>;
};
//# sourceMappingURL=refresh-access-token-interceptor.d.ts.map