# ETX App Configuration

Manage geofence-based application configurations.

```ts
const eTXAppConfigurationController = new ETXAppConfigurationController(client);
```

## Class Name

`ETXAppConfigurationController`

## Methods

* [Get Configuration List](../../doc/controllers/etx-app-configuration.md#get-configuration-list)
* [Get Configuration](../../doc/controllers/etx-app-configuration.md#get-configuration)
* [Create Configuration](../../doc/controllers/etx-app-configuration.md#create-configuration)
* [Update Configuration](../../doc/controllers/etx-app-configuration.md#update-configuration)
* [Delete Configuration](../../doc/controllers/etx-app-configuration.md#delete-configuration)


# Get Configuration List

This endpoint fetches and returns the list of configurations defined by the Vendor. The list contains the configurations' identifier, name, description, and active flag. The vendor ID is provided when the configuration is created through the POST request.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async getConfigurationList(
  vendorID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConfigurationListItem[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The vendor's identifier<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Configuration list was queried successfully

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ConfigurationListItem[]`](../../doc/models/configuration-list-item.md).

## Example Usage

```ts
const vendorID = 'VerizonETX';

try {
  const response = await eTXAppConfigurationController.getConfigurationList(vendorID);

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
    if (error instanceof ResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Forbidden | [`ResponseError`](../../doc/models/response-error.md) |
| 404 | Configuration not found | [`ResponseError`](../../doc/models/response-error.md) |
| 429 | Too many requests | [`ResponseError`](../../doc/models/response-error.md) |
| Default | unexpected error | [`ResponseError`](../../doc/models/response-error.md) |


# Get Configuration

This endpoint fetches and returns a specific configuration's details. The configuration ID parameter, which was provided when the configuration was created through the POST request, is need to retrieve the configuration details.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async getConfiguration(
  id: string,
  vendorID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeoFenceConfigurationResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Query, Required | The configuration identifier<br><br>**Constraints**: *Minimum Length*: `32`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?4[0-9a-fA-F]{3}-?[89abAB][0-9a-fA-F]{3}-?[0-9a-fA-F]{12}$` |
| `vendorID` | `string` | Header, Required | The vendor's identifier<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Configuration found

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GeoFenceConfigurationResponse`](../../doc/models/geo-fence-configuration-response.md).

## Example Usage

```ts
const id = '18bac1ff-c7bd-44d9-a7ad-06a093a94713';

const vendorID = 'VerizonETX';

try {
  const response = await eTXAppConfigurationController.getConfiguration(
    id,
    vendorID
  );

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
    if (error instanceof ResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Forbidden | [`ResponseError`](../../doc/models/response-error.md) |
| 404 | Configuration not found | [`ResponseError`](../../doc/models/response-error.md) |
| 429 | Too many requests | [`ResponseError`](../../doc/models/response-error.md) |
| Default | unexpected error | [`ResponseError`](../../doc/models/response-error.md) |


# Create Configuration

This endpoint creates a new configuration in the system. The data for the new configuration should be provided as JSON in the body of the POST request. The system will return with a unique ID for the configuration, which is needed for any further manipulation (update or delete) of the configuration.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async createConfiguration(
  vendorID: string,
  body: GeoFenceConfigurationRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GeoFenceConfigurationResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The vendor's identifier<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `body` | [`GeoFenceConfigurationRequest`](../../doc/models/geo-fence-configuration-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Configuration created

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GeoFenceConfigurationResponse`](../../doc/models/geo-fence-configuration-response.md).

## Example Usage

```ts
const vendorID = 'VerizonETX';

const body: GeoFenceConfigurationRequest = {
  geoFence: {
    type: TypeEnum.FeatureCollection,
    features: [
      {
        type: Type1Enum.Feature,
        geometry: {
          type: Type2Enum.LineString,
          coordinates: [
            51.5351.54,
            51.5351.54
          ],
        },
        properties: { 'key1': 'val1', 'key2': 'val2' },
      }
    ],
  },
  messages: [
    {
      isPrivate: false,
      roadUserType: [
        RoadUserTypesEnum.VulnerableRoadUser
      ],
      triggerConditions: [
        TriggerConditionEnum.Crossing
      ],
      generic: {
        messageType: 'messageType4',
        messageFormat: 'messageFormat6',
        payload: 'payload0',
      },
    }
  ],
  isActive: false,
  messageStandard: MessageStandardEnum.Sae,
};

try {
  const response = await eTXAppConfigurationController.createConfiguration(
    vendorID,
    body
  );

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
    if (error instanceof ResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid configuration | [`ResponseError`](../../doc/models/response-error.md) |
| 403 | Forbidden | [`ResponseError`](../../doc/models/response-error.md) |
| 429 | Too many requests | [`ResponseError`](../../doc/models/response-error.md) |
| Default | unexpected error | [`ResponseError`](../../doc/models/response-error.md) |


# Update Configuration

This endpoint updates an existing configuration. Similar to POST, the updated data for the configuration should be provided as JSON in the body of the PUT request. The configuration ID parameter, which was provided by the POST (create) operation, is required to do any updates on the configuration.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async updateConfiguration(
  vendorID: string,
  id: string,
  body: GeoFenceConfigurationUpdateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The vendor's identifier<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `id` | `string` | Query, Required | The configuration identifier<br><br>**Constraints**: *Minimum Length*: `32`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?4[0-9a-fA-F]{3}-?[89abAB][0-9a-fA-F]{3}-?[0-9a-fA-F]{12}$` |
| `body` | [`GeoFenceConfigurationUpdateRequest`](../../doc/models/geo-fence-configuration-update-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Configuration applied

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const vendorID = 'VerizonETX';

const id = '18bac1ff-c7bd-44d9-a7ad-06a093a94713';

const body: GeoFenceConfigurationUpdateRequest = {
  messageStandard: MessageStandardEnum.Sae,
};

try {
  const response = await eTXAppConfigurationController.updateConfiguration(
    vendorID,
    id,
    body
  );

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
    if (error instanceof ResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid configuration | [`ResponseError`](../../doc/models/response-error.md) |
| 403 | Forbidden | [`ResponseError`](../../doc/models/response-error.md) |
| 404 | Configuration not found | [`ResponseError`](../../doc/models/response-error.md) |
| 429 | Too many requests | [`ResponseError`](../../doc/models/response-error.md) |
| Default | unexpected error | [`ResponseError`](../../doc/models/response-error.md) |


# Delete Configuration

This endpoint deletes a specific configuration from the system. It requires the configuration ID parameter, which was provided by the POST (create) operation.

Note: The user needs to authenticate with their ThingSpace credentials using the Access/Bearer and Session/M2M tokens in order to call this API.

```ts
async deleteConfiguration(
  vendorID: string,
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Header, Required | The vendor's identifier<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `id` | `string` | Query, Required | The configuration identifier<br><br>**Constraints**: *Minimum Length*: `32`, *Maximum Length*: `36`, *Pattern*: `^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?4[0-9a-fA-F]{3}-?[89abAB][0-9a-fA-F]{3}-?[0-9a-fA-F]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**204**: Configuration deleted

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const vendorID = 'VerizonETX';

const id = '18bac1ff-c7bd-44d9-a7ad-06a093a94713';

try {
  const response = await eTXAppConfigurationController.deleteConfiguration(
    vendorID,
    id
  );

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
    if (error instanceof ResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 403 | Forbidden | [`ResponseError`](../../doc/models/response-error.md) |
| 429 | Too many requests | [`ResponseError`](../../doc/models/response-error.md) |
| Default | unexpected error | [`ResponseError`](../../doc/models/response-error.md) |

