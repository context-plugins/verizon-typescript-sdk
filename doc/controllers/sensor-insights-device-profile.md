# Sensor Insights Device Profile

```ts
const sensorInsightsDeviceProfileController = new SensorInsightsDeviceProfileController(client);
```

## Class Name

`SensorInsightsDeviceProfileController`

## Methods

* [Create a Profile](../../doc/controllers/sensor-insights-device-profile.md#create-a-profile)
* [Delete a Profile](../../doc/controllers/sensor-insights-device-profile.md#delete-a-profile)
* [Update a Profile](../../doc/controllers/sensor-insights-device-profile.md#update-a-profile)
* [Query a Profile](../../doc/controllers/sensor-insights-device-profile.md#query-a-profile)


# Create a Profile

Create a device profile

```ts
async createAProfile(
  body: DtoConfigurationProfile,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DtoProfileResponse[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DtoConfigurationProfile`](../../doc/models/dto-configuration-profile.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DtoProfileResponse[]`](../../doc/models/dto-profile-response.md).

## Example Usage

```ts
const body: DtoConfigurationProfile = {
  accountname: '0000123456-00001',
  profiles: [
    {
      kind: 'the kind of profile being created',
      version: '1.0',
      modelid: '00000000-0000-0000-0000-000000000019',
      name: 'Demo Entry sensor 1730928792',
      configuration: { 'randomInt': 21, 'resportingInterval': 24 },
    }
  ],
};

try {
  const response = await sensorInsightsDeviceProfileController.createAProfile(body);

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
    if (error instanceof M400ManagementError) {
      console.log(error.result);
    } else if (error instanceof ManagementError) {
      console.log(error.result);
    } else if (error instanceof M403ManagementError) {
      console.log(error.result);
    } else if (error instanceof M500ManagementError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ManagementError`](../../doc/models/m400-management-error.md) |
| 401 | UnAuthorized | [`ManagementError`](../../doc/models/management-error.md) |
| 403 | Forbidden | [`M403ManagementError`](../../doc/models/m403-management-error.md) |
| 500 | Internal server error. | [`M500ManagementError`](../../doc/models/m500-management-error.md) |


# Delete a Profile

Delete a device profile

```ts
async deleteAProfile(
  deleterequest: DtoConfigurationProfileDelete,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DtoProfileResponse[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deleterequest` | [`DtoConfigurationProfileDelete`](../../doc/models/dto-configuration-profile-delete.md) | Header, Required | payload for the delete request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**202**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DtoProfileResponse[]`](../../doc/models/dto-profile-response.md).

## Example Usage

```ts
const deleterequest: DtoConfigurationProfileDelete = {
  accountName: '0000123456-00001',
};

try {
  const response = await sensorInsightsDeviceProfileController.deleteAProfile(deleterequest);

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
    if (error instanceof M400ManagementError) {
      console.log(error.result);
    } else if (error instanceof ManagementError) {
      console.log(error.result);
    } else if (error instanceof M403ManagementError) {
      console.log(error.result);
    } else if (error instanceof M500ManagementError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ManagementError`](../../doc/models/m400-management-error.md) |
| 401 | UnAuthorized | [`ManagementError`](../../doc/models/management-error.md) |
| 403 | Forbidden | [`M403ManagementError`](../../doc/models/m403-management-error.md) |
| 500 | Internal server error. | [`M500ManagementError`](../../doc/models/m500-management-error.md) |


# Update a Profile

Partially update a device profile

```ts
async updateAProfile(
  body: DtoConfigurationProfilePath,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DtoProfileResponse[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DtoConfigurationProfilePath`](../../doc/models/dto-configuration-profile-path.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DtoProfileResponse[]`](../../doc/models/dto-profile-response.md).

## Example Usage

```ts
const body: DtoConfigurationProfilePath = {
};

try {
  const response = await sensorInsightsDeviceProfileController.updateAProfile(body);

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
    if (error instanceof M400ManagementError) {
      console.log(error.result);
    } else if (error instanceof ManagementError) {
      console.log(error.result);
    } else if (error instanceof M403ManagementError) {
      console.log(error.result);
    } else if (error instanceof M500ManagementError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ManagementError`](../../doc/models/m400-management-error.md) |
| 401 | UnAuthorized | [`ManagementError`](../../doc/models/management-error.md) |
| 403 | Forbidden | [`M403ManagementError`](../../doc/models/m403-management-error.md) |
| 500 | Internal server error. | [`M500ManagementError`](../../doc/models/m500-management-error.md) |


# Query a Profile

Query a device profile for an individual device

```ts
async queryAProfile(
  body: ResourceResourceQuery,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DtoProfileResponse[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResourceResourceQuery`](../../doc/models/resource-resource-query.md) | Body, Required | body |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DtoProfileResponse[]`](../../doc/models/dto-profile-response.md).

## Example Usage

```ts
const body: ResourceResourceQuery = {
  filter: {
    selection: {
      modelid: '00000000-0000-0000-0000-000000000019',
    },
    querytotalcount: true,
  },
};

try {
  const response = await sensorInsightsDeviceProfileController.queryAProfile(body);

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
    if (error instanceof M400ManagementError) {
      console.log(error.result);
    } else if (error instanceof ManagementError) {
      console.log(error.result);
    } else if (error instanceof M403ManagementError) {
      console.log(error.result);
    } else if (error instanceof M500ManagementError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`M400ManagementError`](../../doc/models/m400-management-error.md) |
| 401 | UnAuthorized | [`ManagementError`](../../doc/models/management-error.md) |
| 403 | Forbidden | [`M403ManagementError`](../../doc/models/m403-management-error.md) |
| 500 | Internal server error. | [`M500ManagementError`](../../doc/models/m500-management-error.md) |

