# Aurora Cloud Console SDK

A client for the Aurora Cloud Console API.

This client is generated automatically on a schedule based on the OpenAPI specs
published at <https://app.auroracloud.dev/api>.

## Installation

```sh
yarn add @aurora-is-near/aurora-cloud-console-sdk
```

## Usage

Once the API client has been generated it can be instantiated as follows:

```js
import { createAuroraCloudConsoleClient } from '@aurora-is-near/aurora-cloud-console-sdk';

const client = createAuroraCloudConsoleClient({
  baseURL: 'http://example.api.com',
  getAccessToken: () => 'my-access-token',
  refreshAccessToken: () => 'my-new-access-token',
  onError: console.error,
});
```

The client object exposes functions for each API operation, as defined by the
OpenAPI specification. Each function is called with an object containing the
following properties:

### `params`

An object containing properties that are mapped to any named route parameters.
For example, if you have the route `/user/:name`, then the `name` property should
be passed in as `params: { name: 'Alex' }`.

### `query`

An object containing a property for each query string parameter.

### `data`

An object containing key-value to submit as the request body
(i.e. for POST or PUT requests).
