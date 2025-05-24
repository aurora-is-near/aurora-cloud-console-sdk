import { getRequestFunction } from '../create';
import { OpenApiClientOptions } from '../options';

import type { components as AuroraCloudConsoleApiTypes } from './auroraCloudConsoleApi/types';
import {
  getOperations as getAuroraCloudConsoleApiOperations,
  AuroraCloudConsoleApiMethods,
  AuroraCloudConsoleApiClient,
  AuroraCloudConsoleApiRequest,
} from './auroraCloudConsoleApi/client';

export type AuroraCloudConsoleApiModels = AuroraCloudConsoleApiTypes['schemas'];

export {
  AuroraCloudConsoleApiMethods,
  AuroraCloudConsoleApiClient,
  AuroraCloudConsoleApiRequest,
  getAuroraCloudConsoleApiOperations,
};

export const createAuroraCloudConsoleApiClient = (
  options: OpenApiClientOptions,
): AuroraCloudConsoleApiClient => {
  const request = getRequestFunction('Aurora Cloud Console API', '1.12.0', options);

  return getAuroraCloudConsoleApiOperations(request);
};
