import { createAuroraCloudConsoleApiClient } from './generated/clients';
import {
  OpenApiClientError,
  OpenApiClientTimeoutError,
} from './generated/errors';
import { OnRequestFunction } from './generated/interceptors/request-debug-interceptor';
import { Timeout } from './generated/options';

type ApiClientOptions = {
  apiKey: string;
  onError?: (error: OpenApiClientError) => void;
  onClientError?: (error: OpenApiClientError) => void;
  onTimeoutError?: (error: OpenApiClientTimeoutError) => void;
  onRequest?: OnRequestFunction;
  timeout?: number | Timeout;
};

export const createApiClient = ({
  apiKey,
  onError,
  onClientError,
  onTimeoutError,
  onRequest,
  timeout,
}: ApiClientOptions) =>
  createAuroraCloudConsoleApiClient({
    baseURL: 'https://app.auroracloud.dev',
    getAccessToken: async () => apiKey,
    onError,
    onClientError,
    onTimeoutError,
    onRequest,
    timeout,
  });
