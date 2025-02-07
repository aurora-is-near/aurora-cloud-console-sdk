export type AccessToken = string | null | undefined;
export type TokenRetrieverFunction = () => AccessToken | Promise<AccessToken>;
/**
 * Get the bearer authorization header.
 */
export declare const getAuthorizationHeader: (url: string, secure: boolean, getAccessToken?: TokenRetrieverFunction, refreshAccessToken?: TokenRetrieverFunction) => Promise<string | null>;
//# sourceMappingURL=auth.d.ts.map