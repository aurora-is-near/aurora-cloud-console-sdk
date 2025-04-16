/**
 * This file was auto-generated.
 * Do not make direct changes to the file.
 */

import { operations } from './types';
import { OperationConfig } from '../../operations';

export interface AuroraCloudConsoleApiMethods {
  getDeals: {
    response: NonNullable<operations['getDeals']['responses']['200']>['content']['application/json'];
    options?: never;
  };
  createDeal: {
    response: NonNullable<operations['createDeal']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['createDeal']['requestBody']>['content']['application/json'];
    options: {
      params?: null;
      query?: null;
      data: AuroraCloudConsoleApiMethods['createDeal']['data'];
    };
  };
  getDeal: {
    response: NonNullable<operations['getDeal']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getDeal']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  updateDeal: {
    response: NonNullable<operations['updateDeal']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['updateDeal']['requestBody']>['content']['application/json'];
    options: {
      params: operations['updateDeal']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['updateDeal']['data'];
    };
  };
  getRules: {
    response: NonNullable<operations['getRules']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getRules']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  createRule: {
    response: NonNullable<operations['createRule']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['createRule']['requestBody']>['content']['application/json'];
    options: {
      params: operations['createRule']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['createRule']['data'];
    };
  };
  updateRule: {
    response: NonNullable<operations['updateRule']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['updateRule']['requestBody']>['content']['application/json'];
    options: {
      params: operations['updateRule']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['updateRule']['data'];
    };
  };
  getSilos: {
    response: NonNullable<operations['getSilos']['responses']['200']>['content']['application/json'];
    options?: never;
  };
  getSilo: {
    response: NonNullable<operations['getSilo']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSilo']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  getSiloBridgedTokens: {
    response: NonNullable<operations['getSiloBridgedTokens']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloBridgedTokens']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  getSiloBridgedTokenRequests: {
    response: NonNullable<operations['getSiloBridgedTokenRequests']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloBridgedTokenRequests']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  bridgeSiloToken: {
    response: NonNullable<operations['bridgeSiloToken']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['bridgeSiloToken']['requestBody']>['content']['application/json'];
    options: {
      params: operations['bridgeSiloToken']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['bridgeSiloToken']['data'];
    };
  };
  getSiloOracle: {
    response: NonNullable<operations['getSiloOracle']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloOracle']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  createSiloOracle: {
    response: NonNullable<operations['createSiloOracle']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['createSiloOracle']['requestBody']>['content']['application/json'];
    options: {
      params: operations['createSiloOracle']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['createSiloOracle']['data'];
    };
  };
  getWidget: {
    response: NonNullable<operations['getWidget']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getWidget']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  updateWidget: {
    response: NonNullable<operations['updateWidget']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['updateWidget']['requestBody']>['content']['application/json'];
    options: {
      params: operations['updateWidget']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['updateWidget']['data'];
    };
  };
  getWallets: {
    response: NonNullable<operations['getWallets']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getWallets']['parameters']['path'];
      query?: operations['getWallets']['parameters']['query'];
      data?: null;
    };
  };
  getWallet: {
    response: NonNullable<operations['getWallet']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getWallet']['parameters']['path'];
      query?: operations['getWallet']['parameters']['query'];
      data?: null;
    };
  };
  getSiloTransactions: {
    response: NonNullable<operations['getSiloTransactions']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloTransactions']['parameters']['path'];
      query?: operations['getSiloTransactions']['parameters']['query'];
      data?: null;
    };
  };
  toggleSiloPermissions: {
    response: NonNullable<operations['toggleSiloPermissions']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['toggleSiloPermissions']['requestBody']>['content']['application/json'];
    options: {
      params: operations['toggleSiloPermissions']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['toggleSiloPermissions']['data'];
    };
  };
  addAddressToPermissionsWhitelist: {
    response: NonNullable<operations['addAddressToPermissionsWhitelist']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['addAddressToPermissionsWhitelist']['requestBody']>['content']['application/json'];
    options: {
      params: operations['addAddressToPermissionsWhitelist']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['addAddressToPermissionsWhitelist']['data'];
    };
  };
  removeAddressFromPermissionsWhitelist: {
    response: NonNullable<operations['removeAddressFromPermissionsWhitelist']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['removeAddressFromPermissionsWhitelist']['requestBody']>['content']['application/json'];
    options: {
      params: operations['removeAddressFromPermissionsWhitelist']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['removeAddressFromPermissionsWhitelist']['data'];
    };
  };
  getSiloCollectedGas: {
    response: NonNullable<operations['getSiloCollectedGas']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloCollectedGas']['parameters']['path'];
      query: operations['getSiloCollectedGas']['parameters']['query'];
      data?: null;
    };
  };
  getSiloCollectedGasTotal: {
    response: NonNullable<operations['getSiloCollectedGasTotal']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloCollectedGasTotal']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  getSiloFailureRate: {
    response: NonNullable<operations['getSiloFailureRate']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloFailureRate']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  getSiloLatency: {
    response: NonNullable<operations['getSiloLatency']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloLatency']['parameters']['path'];
      query?: operations['getSiloLatency']['parameters']['query'];
      data?: null;
    };
  };
  getSiloRpcRequests: {
    response: NonNullable<operations['getSiloRpcRequests']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getSiloRpcRequests']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  getForwarderAddress: {
    response: NonNullable<operations['getForwarderAddress']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getForwarderAddress']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  createForwarderAddress: {
    response: NonNullable<operations['createForwarderAddress']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['createForwarderAddress']['requestBody']>['content']['application/json'];
    options: {
      params: operations['createForwarderAddress']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['createForwarderAddress']['data'];
    };
  };
  getForwarderTokens: {
    response: NonNullable<operations['getForwarderTokens']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['getForwarderTokens']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  addForwarderTokens: {
    response: NonNullable<operations['addForwarderTokens']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['addForwarderTokens']['requestBody']>['content']['application/json'];
    options: {
      params: operations['addForwarderTokens']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['addForwarderTokens']['data'];
    };
  };
  removeForwarderTokens: {
    response: NonNullable<operations['removeForwarderTokens']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['removeForwarderTokens']['requestBody']>['content']['application/json'];
    options: {
      params: operations['removeForwarderTokens']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['removeForwarderTokens']['data'];
    };
  };
  updateForwarderTokens: {
    response: NonNullable<operations['updateForwarderTokens']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['updateForwarderTokens']['requestBody']>['content']['application/json'];
    options: {
      params: operations['updateForwarderTokens']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['updateForwarderTokens']['data'];
    };
  };
  healthcheck: {
    response: NonNullable<operations['healthcheck']['responses']['200']>['content']['application/json'];
    options: {
      params: operations['healthcheck']['parameters']['path'];
      query?: null;
      data?: null;
    };
  };
  repair: {
    response: NonNullable<operations['repair']['responses']['200']>['content']['application/json'];
    data: NonNullable<operations['repair']['requestBody']>['content']['application/json'];
    options: {
      params: operations['repair']['parameters']['path'];
      query?: null;
      data: AuroraCloudConsoleApiMethods['repair']['data'];
    };
  };
};

export type AuroraCloudConsoleApiRequest = <T extends keyof AuroraCloudConsoleApiMethods>(
  operationConfig: OperationConfig,
  options?: AuroraCloudConsoleApiMethods[T]['options'],
) => Promise<AuroraCloudConsoleApiMethods[T]['response']>;

export type AuroraCloudConsoleApiClient = {
  getDeals: () => Promise<AuroraCloudConsoleApiMethods['getDeals']['response']>;
  createDeal: (options: AuroraCloudConsoleApiMethods['createDeal']['options']) => Promise<AuroraCloudConsoleApiMethods['createDeal']['response']>;
  getDeal: (options: AuroraCloudConsoleApiMethods['getDeal']['options']) => Promise<AuroraCloudConsoleApiMethods['getDeal']['response']>;
  updateDeal: (options: AuroraCloudConsoleApiMethods['updateDeal']['options']) => Promise<AuroraCloudConsoleApiMethods['updateDeal']['response']>;
  getRules: (options: AuroraCloudConsoleApiMethods['getRules']['options']) => Promise<AuroraCloudConsoleApiMethods['getRules']['response']>;
  createRule: (options: AuroraCloudConsoleApiMethods['createRule']['options']) => Promise<AuroraCloudConsoleApiMethods['createRule']['response']>;
  updateRule: (options: AuroraCloudConsoleApiMethods['updateRule']['options']) => Promise<AuroraCloudConsoleApiMethods['updateRule']['response']>;
  getSilos: () => Promise<AuroraCloudConsoleApiMethods['getSilos']['response']>;
  getSilo: (options: AuroraCloudConsoleApiMethods['getSilo']['options']) => Promise<AuroraCloudConsoleApiMethods['getSilo']['response']>;
  getSiloBridgedTokens: (options: AuroraCloudConsoleApiMethods['getSiloBridgedTokens']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloBridgedTokens']['response']>;
  getSiloBridgedTokenRequests: (options: AuroraCloudConsoleApiMethods['getSiloBridgedTokenRequests']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloBridgedTokenRequests']['response']>;
  bridgeSiloToken: (options: AuroraCloudConsoleApiMethods['bridgeSiloToken']['options']) => Promise<AuroraCloudConsoleApiMethods['bridgeSiloToken']['response']>;
  getSiloOracle: (options: AuroraCloudConsoleApiMethods['getSiloOracle']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloOracle']['response']>;
  createSiloOracle: (options: AuroraCloudConsoleApiMethods['createSiloOracle']['options']) => Promise<AuroraCloudConsoleApiMethods['createSiloOracle']['response']>;
  getWidget: (options: AuroraCloudConsoleApiMethods['getWidget']['options']) => Promise<AuroraCloudConsoleApiMethods['getWidget']['response']>;
  updateWidget: (options: AuroraCloudConsoleApiMethods['updateWidget']['options']) => Promise<AuroraCloudConsoleApiMethods['updateWidget']['response']>;
  getWallets: (options: AuroraCloudConsoleApiMethods['getWallets']['options']) => Promise<AuroraCloudConsoleApiMethods['getWallets']['response']>;
  getWallet: (options: AuroraCloudConsoleApiMethods['getWallet']['options']) => Promise<AuroraCloudConsoleApiMethods['getWallet']['response']>;
  getSiloTransactions: (options: AuroraCloudConsoleApiMethods['getSiloTransactions']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloTransactions']['response']>;
  toggleSiloPermissions: (options: AuroraCloudConsoleApiMethods['toggleSiloPermissions']['options']) => Promise<AuroraCloudConsoleApiMethods['toggleSiloPermissions']['response']>;
  addAddressToPermissionsWhitelist: (options: AuroraCloudConsoleApiMethods['addAddressToPermissionsWhitelist']['options']) => Promise<AuroraCloudConsoleApiMethods['addAddressToPermissionsWhitelist']['response']>;
  removeAddressFromPermissionsWhitelist: (options: AuroraCloudConsoleApiMethods['removeAddressFromPermissionsWhitelist']['options']) => Promise<AuroraCloudConsoleApiMethods['removeAddressFromPermissionsWhitelist']['response']>;
  getSiloCollectedGas: (options: AuroraCloudConsoleApiMethods['getSiloCollectedGas']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloCollectedGas']['response']>;
  getSiloCollectedGasTotal: (options: AuroraCloudConsoleApiMethods['getSiloCollectedGasTotal']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloCollectedGasTotal']['response']>;
  getSiloFailureRate: (options: AuroraCloudConsoleApiMethods['getSiloFailureRate']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloFailureRate']['response']>;
  getSiloLatency: (options: AuroraCloudConsoleApiMethods['getSiloLatency']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloLatency']['response']>;
  getSiloRpcRequests: (options: AuroraCloudConsoleApiMethods['getSiloRpcRequests']['options']) => Promise<AuroraCloudConsoleApiMethods['getSiloRpcRequests']['response']>;
  getForwarderAddress: (options: AuroraCloudConsoleApiMethods['getForwarderAddress']['options']) => Promise<AuroraCloudConsoleApiMethods['getForwarderAddress']['response']>;
  createForwarderAddress: (options: AuroraCloudConsoleApiMethods['createForwarderAddress']['options']) => Promise<AuroraCloudConsoleApiMethods['createForwarderAddress']['response']>;
  getForwarderTokens: (options: AuroraCloudConsoleApiMethods['getForwarderTokens']['options']) => Promise<AuroraCloudConsoleApiMethods['getForwarderTokens']['response']>;
  addForwarderTokens: (options: AuroraCloudConsoleApiMethods['addForwarderTokens']['options']) => Promise<AuroraCloudConsoleApiMethods['addForwarderTokens']['response']>;
  removeForwarderTokens: (options: AuroraCloudConsoleApiMethods['removeForwarderTokens']['options']) => Promise<AuroraCloudConsoleApiMethods['removeForwarderTokens']['response']>;
  updateForwarderTokens: (options: AuroraCloudConsoleApiMethods['updateForwarderTokens']['options']) => Promise<AuroraCloudConsoleApiMethods['updateForwarderTokens']['response']>;
  healthcheck: (options: AuroraCloudConsoleApiMethods['healthcheck']['options']) => Promise<AuroraCloudConsoleApiMethods['healthcheck']['response']>;
  repair: (options: AuroraCloudConsoleApiMethods['repair']['options']) => Promise<AuroraCloudConsoleApiMethods['repair']['response']>;
}

export const getOperations = (request: AuroraCloudConsoleApiRequest): AuroraCloudConsoleApiClient => ({
  async getDeals(
    
  ): Promise<AuroraCloudConsoleApiMethods['getDeals']['response']> {
    return request({
      endpoint: '/api/deals',
      method: 'get',
      secure: true,
    }) as Promise<AuroraCloudConsoleApiMethods['getDeals']['response']>;
  },
  async createDeal(
    options: AuroraCloudConsoleApiMethods['createDeal']['options']
  ): Promise<AuroraCloudConsoleApiMethods['createDeal']['response']> {
    return request({
      endpoint: '/api/deals',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['createDeal']['response']>;
  },
  async getDeal(
    options: AuroraCloudConsoleApiMethods['getDeal']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getDeal']['response']> {
    return request({
      endpoint: '/api/deals/{id}',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getDeal']['response']>;
  },
  async updateDeal(
    options: AuroraCloudConsoleApiMethods['updateDeal']['options']
  ): Promise<AuroraCloudConsoleApiMethods['updateDeal']['response']> {
    return request({
      endpoint: '/api/deals/{id}',
      method: 'put',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['updateDeal']['response']>;
  },
  async getRules(
    options: AuroraCloudConsoleApiMethods['getRules']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getRules']['response']> {
    return request({
      endpoint: '/api/deals/{id}/rules',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getRules']['response']>;
  },
  async createRule(
    options: AuroraCloudConsoleApiMethods['createRule']['options']
  ): Promise<AuroraCloudConsoleApiMethods['createRule']['response']> {
    return request({
      endpoint: '/api/deals/{id}/rules',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['createRule']['response']>;
  },
  async updateRule(
    options: AuroraCloudConsoleApiMethods['updateRule']['options']
  ): Promise<AuroraCloudConsoleApiMethods['updateRule']['response']> {
    return request({
      endpoint: '/api/deals/{id}/rules/{rule_id}',
      method: 'put',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['updateRule']['response']>;
  },
  async getSilos(
    
  ): Promise<AuroraCloudConsoleApiMethods['getSilos']['response']> {
    return request({
      endpoint: '/api/silos',
      method: 'get',
      secure: true,
    }) as Promise<AuroraCloudConsoleApiMethods['getSilos']['response']>;
  },
  async getSilo(
    options: AuroraCloudConsoleApiMethods['getSilo']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSilo']['response']> {
    return request({
      endpoint: '/api/silos/{id}',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSilo']['response']>;
  },
  async getSiloBridgedTokens(
    options: AuroraCloudConsoleApiMethods['getSiloBridgedTokens']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloBridgedTokens']['response']> {
    return request({
      endpoint: '/api/silos/{id}/tokens',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloBridgedTokens']['response']>;
  },
  async getSiloBridgedTokenRequests(
    options: AuroraCloudConsoleApiMethods['getSiloBridgedTokenRequests']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloBridgedTokenRequests']['response']> {
    return request({
      endpoint: '/api/silos/{id}/tokens/requests',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloBridgedTokenRequests']['response']>;
  },
  async bridgeSiloToken(
    options: AuroraCloudConsoleApiMethods['bridgeSiloToken']['options']
  ): Promise<AuroraCloudConsoleApiMethods['bridgeSiloToken']['response']> {
    return request({
      endpoint: '/api/silos/{id}/tokens/bridge',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['bridgeSiloToken']['response']>;
  },
  async getSiloOracle(
    options: AuroraCloudConsoleApiMethods['getSiloOracle']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloOracle']['response']> {
    return request({
      endpoint: '/api/silos/{id}/oracle',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloOracle']['response']>;
  },
  async createSiloOracle(
    options: AuroraCloudConsoleApiMethods['createSiloOracle']['options']
  ): Promise<AuroraCloudConsoleApiMethods['createSiloOracle']['response']> {
    return request({
      endpoint: '/api/silos/{id}/oracle',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['createSiloOracle']['response']>;
  },
  async getWidget(
    options: AuroraCloudConsoleApiMethods['getWidget']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getWidget']['response']> {
    return request({
      endpoint: '/api/silos/{id}/widget',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getWidget']['response']>;
  },
  async updateWidget(
    options: AuroraCloudConsoleApiMethods['updateWidget']['options']
  ): Promise<AuroraCloudConsoleApiMethods['updateWidget']['response']> {
    return request({
      endpoint: '/api/silos/{id}/widget',
      method: 'put',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['updateWidget']['response']>;
  },
  async getWallets(
    options: AuroraCloudConsoleApiMethods['getWallets']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getWallets']['response']> {
    return request({
      endpoint: '/api/silos/{id}/wallets',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getWallets']['response']>;
  },
  async getWallet(
    options: AuroraCloudConsoleApiMethods['getWallet']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getWallet']['response']> {
    return request({
      endpoint: '/api/silos/{id}/wallets/{address}',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getWallet']['response']>;
  },
  async getSiloTransactions(
    options: AuroraCloudConsoleApiMethods['getSiloTransactions']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloTransactions']['response']> {
    return request({
      endpoint: '/api/silos/{id}/transactions',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloTransactions']['response']>;
  },
  async toggleSiloPermissions(
    options: AuroraCloudConsoleApiMethods['toggleSiloPermissions']['options']
  ): Promise<AuroraCloudConsoleApiMethods['toggleSiloPermissions']['response']> {
    return request({
      endpoint: '/api/silos/{id}/permissions',
      method: 'put',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['toggleSiloPermissions']['response']>;
  },
  async addAddressToPermissionsWhitelist(
    options: AuroraCloudConsoleApiMethods['addAddressToPermissionsWhitelist']['options']
  ): Promise<AuroraCloudConsoleApiMethods['addAddressToPermissionsWhitelist']['response']> {
    return request({
      endpoint: '/api/silos/{id}/permissions',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['addAddressToPermissionsWhitelist']['response']>;
  },
  async removeAddressFromPermissionsWhitelist(
    options: AuroraCloudConsoleApiMethods['removeAddressFromPermissionsWhitelist']['options']
  ): Promise<AuroraCloudConsoleApiMethods['removeAddressFromPermissionsWhitelist']['response']> {
    return request({
      endpoint: '/api/silos/{id}/permissions',
      method: 'delete',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['removeAddressFromPermissionsWhitelist']['response']>;
  },
  async getSiloCollectedGas(
    options: AuroraCloudConsoleApiMethods['getSiloCollectedGas']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloCollectedGas']['response']> {
    return request({
      endpoint: '/api/silos/{id}/gas-collected',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloCollectedGas']['response']>;
  },
  async getSiloCollectedGasTotal(
    options: AuroraCloudConsoleApiMethods['getSiloCollectedGasTotal']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloCollectedGasTotal']['response']> {
    return request({
      endpoint: '/api/silos/{id}/gas-collected-total',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloCollectedGasTotal']['response']>;
  },
  async getSiloFailureRate(
    options: AuroraCloudConsoleApiMethods['getSiloFailureRate']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloFailureRate']['response']> {
    return request({
      endpoint: '/api/silos/{id}/failure-rate',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloFailureRate']['response']>;
  },
  async getSiloLatency(
    options: AuroraCloudConsoleApiMethods['getSiloLatency']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloLatency']['response']> {
    return request({
      endpoint: '/api/silos/{id}/latency',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloLatency']['response']>;
  },
  async getSiloRpcRequests(
    options: AuroraCloudConsoleApiMethods['getSiloRpcRequests']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getSiloRpcRequests']['response']> {
    return request({
      endpoint: '/api/silos/{id}/rpc-requests',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getSiloRpcRequests']['response']>;
  },
  async getForwarderAddress(
    options: AuroraCloudConsoleApiMethods['getForwarderAddress']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getForwarderAddress']['response']> {
    return request({
      endpoint: '/api/silos/{id}/forwarder/contract/{targetAddress}',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getForwarderAddress']['response']>;
  },
  async createForwarderAddress(
    options: AuroraCloudConsoleApiMethods['createForwarderAddress']['options']
  ): Promise<AuroraCloudConsoleApiMethods['createForwarderAddress']['response']> {
    return request({
      endpoint: '/api/silos/{id}/forwarder/contract',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['createForwarderAddress']['response']>;
  },
  async getForwarderTokens(
    options: AuroraCloudConsoleApiMethods['getForwarderTokens']['options']
  ): Promise<AuroraCloudConsoleApiMethods['getForwarderTokens']['response']> {
    return request({
      endpoint: '/api/silos/{id}/forwarder/tokens',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['getForwarderTokens']['response']>;
  },
  async addForwarderTokens(
    options: AuroraCloudConsoleApiMethods['addForwarderTokens']['options']
  ): Promise<AuroraCloudConsoleApiMethods['addForwarderTokens']['response']> {
    return request({
      endpoint: '/api/silos/{id}/forwarder/tokens',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['addForwarderTokens']['response']>;
  },
  async removeForwarderTokens(
    options: AuroraCloudConsoleApiMethods['removeForwarderTokens']['options']
  ): Promise<AuroraCloudConsoleApiMethods['removeForwarderTokens']['response']> {
    return request({
      endpoint: '/api/silos/{id}/forwarder/tokens',
      method: 'delete',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['removeForwarderTokens']['response']>;
  },
  async updateForwarderTokens(
    options: AuroraCloudConsoleApiMethods['updateForwarderTokens']['options']
  ): Promise<AuroraCloudConsoleApiMethods['updateForwarderTokens']['response']> {
    return request({
      endpoint: '/api/silos/{id}/forwarder/tokens',
      method: 'put',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['updateForwarderTokens']['response']>;
  },
  async healthcheck(
    options: AuroraCloudConsoleApiMethods['healthcheck']['options']
  ): Promise<AuroraCloudConsoleApiMethods['healthcheck']['response']> {
    return request({
      endpoint: '/api/silos/{id}/healthcheck',
      method: 'get',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['healthcheck']['response']>;
  },
  async repair(
    options: AuroraCloudConsoleApiMethods['repair']['options']
  ): Promise<AuroraCloudConsoleApiMethods['repair']['response']> {
    return request({
      endpoint: '/api/silos/{id}/repair',
      method: 'post',
      secure: true,
    }, options) as Promise<AuroraCloudConsoleApiMethods['repair']['response']>;
  },
});
