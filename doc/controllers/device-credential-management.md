# Device Credential Management

```ts
const deviceCredentialManagementController = new DeviceCredentialManagementController(client);
```

## Class Name

`DeviceCredentialManagementController`

## Methods

* [Retrieve Credentials](../../doc/controllers/device-credential-management.md#retrieve-credentials)
* [Generate Credentials](../../doc/controllers/device-credential-management.md#generate-credentials)
* [Reset Credentials](../../doc/controllers/device-credential-management.md#reset-credentials)
* [Drop Credentials](../../doc/controllers/device-credential-management.md#drop-credentials)


# Retrieve Credentials

```ts
async retrieveCredentials(
  body: CredentialsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsRequest`](../../doc/models/credentials-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful retrieval

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RetrieveResponse`](../../doc/models/retrieve-response.md).

## Example Usage

```ts
const body: CredentialsRequest = {
  eCPD: '3161585',
  accountNumber: '0844021539-00001',
  items: [
    {
      imei: '221000008775573',
    }
  ],
};

try {
  const response = await deviceCredentialManagementController.retrieveCredentials(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request / Verification Failure | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 401 | Unauthorized | `ApiError` |


# Generate Credentials

```ts
async generateCredentials(
  body: CredentialsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsRequest`](../../doc/models/credentials-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Credentials generated successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenerateResponse`](../../doc/models/generate-response.md).

## Example Usage

```ts
const body: CredentialsRequest = {
  eCPD: '3161585',
  accountNumber: '0844021539-00001',
  items: [
    {
      imei: '221000008775573',
    }
  ],
};

try {
  const response = await deviceCredentialManagementController.generateCredentials(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Reset Credentials

```ts
async resetCredentials(
  body: CredentialsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GenerateResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsRequest`](../../doc/models/credentials-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Credentials reset successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GenerateResponse`](../../doc/models/generate-response.md).

## Example Usage

```ts
const body: CredentialsRequest = {
  eCPD: '3161585',
  accountNumber: '0844021539-00001',
  items: [
    {
      imei: '221000008775573',
    }
  ],
};

try {
  const response = await deviceCredentialManagementController.resetCredentials(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Drop Credentials

```ts
async dropCredentials(
  body: CredentialsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DropResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CredentialsRequest`](../../doc/models/credentials-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Credentials dropped successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DropResponse`](../../doc/models/drop-response.md).

## Example Usage

```ts
const body: CredentialsRequest = {
  eCPD: '3161585',
  accountNumber: '0844021539-00001',
  items: [
    {
      imei: '221000008775573',
    }
  ],
};

try {
  const response = await deviceCredentialManagementController.dropCredentials(body);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof ErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorResponseError`](../../doc/models/error-response-error.md) |

