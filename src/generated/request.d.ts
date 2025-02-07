import { AxiosInstance } from 'axios';
import { TokenRetrieverFunction } from './auth';
import { OperationConfig } from './operations';
type OperationOption = Record<string, unknown> | null;
type OperationOptions = {
    data?: OperationOption;
    query?: OperationOption;
    params?: OperationOption;
};
/**
 * Create the request function that is passed to the operations file.
 */
export declare const createRequestFunction: (axiosInstance: AxiosInstance, basePath?: string, getAccessToken?: TokenRetrieverFunction, refreshAccessToken?: TokenRetrieverFunction) => <T>(operationConfig: OperationConfig, options?: OperationOptions) => Promise<T>;
export {};
//# sourceMappingURL=request.d.ts.map