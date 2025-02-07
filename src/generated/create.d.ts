import { OpenApiClientOptions } from './options';
/**
 * Get the function for making API requests for a particular client.
 */
export declare const getRequestFunction: (title: string, version: string, options: OpenApiClientOptions) => <T>(operationConfig: import("@aurora-is-near/openapi-client/src/operations").OperationConfig, options?: {
    data?: Record<string, unknown> | null;
    query?: Record<string, unknown> | null;
    params?: Record<string, unknown> | null;
}) => Promise<T>;
//# sourceMappingURL=create.d.ts.map