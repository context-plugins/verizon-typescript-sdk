# Sensor Insights Rules

```ts
const sensorInsightsRulesController = new SensorInsightsRulesController(client);
```

## Class Name

`SensorInsightsRulesController`

## Methods

* [Sensor Insights Overwrite Rule Request](../../doc/controllers/sensor-insights-rules.md#sensor-insights-overwrite-rule-request)
* [Sensor Insights List Rules Request](../../doc/controllers/sensor-insights-rules.md#sensor-insights-list-rules-request)


# Sensor Insights Overwrite Rule Request

```ts
async sensorInsightsOverwriteRuleRequest(
  body: DtoOverwriteRuleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResourceRule>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DtoOverwriteRuleRequest`](../../doc/models/dto-overwrite-rule-request.md) | Body, Required | Overwrite a rule |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ResourceRule`](../../doc/models/resource-rule.md).

## Example Usage

```ts
const body: DtoOverwriteRuleRequest = {
  accountname: '0000123456-00001',
  resourceidentifier: {
    id: '7f5f610a-eeee-ffff-gggg-4d20cf3dcfbc',
  },
  rule: {
    createdon: '2023-10-02T15:46:34.562Z',
    foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
    lastupdated: '2023-10-02T15:46:34.562Z',
    rulechain: {  },
    versionid: '337bd2e8-eeee-ffff-gggg-5207992fd395',
    accountclientid: 'null',
    billingaccountid: 'The billing account ID',
    description: 'a short description',
    deviceid: 'The UUID of the device',
    disabled: true,
    id: 'bc5b5b5a-eeee-ffff-gggg-cb2cb2533d47',
    name: 'User defined name of the record',
    rulesyntax: 'The rule syntax',
    version: '1.0',
  },
};

try {
  const response = await sensorInsightsRulesController.sensorInsightsOverwriteRuleRequest(body);

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
    } else if (error instanceof M404ManagementError) {
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
| 404 | Not Found | [`M404ManagementError`](../../doc/models/m404-management-error.md) |
| 406 | Not Acceptable | [`ManagementError`](../../doc/models/management-error.md) |
| 415 | Unsupported media type | [`ManagementError`](../../doc/models/management-error.md) |
| 429 | Too many requests | [`ManagementError`](../../doc/models/management-error.md) |
| 500 | Internal server error. | [`M500ManagementError`](../../doc/models/m500-management-error.md) |
| Default | Unexpected error | [`ManagementError`](../../doc/models/management-error.md) |


# Sensor Insights List Rules Request

```ts
async sensorInsightsListRulesRequest(
  body: DtoListRulesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResourceRule[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DtoListRulesRequest`](../../doc/models/dto-list-rules-request.md) | Body, Required | Retrieve a rule |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ResourceRule[]`](../../doc/models/resource-rule.md).

## Example Usage

```ts
const body: DtoListRulesRequest = {
  accountname: '0000123456-00001',
  filter: {
    expand: 'device detail(s)',
    limitnumber: 100,
    nopagination: true,
    page: 'The number of pages',
    pagenumber: 100,
    projection: [
      'specific device fields requested'
    ],
    selection: {
      'additionalProp1': { 'key1': 'val1', 'key2': 'val2' },
      'additionalProp2': { 'key1': 'val1', 'key2': 'val2' },
      'additionalProp3': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  resourceidentifier: {
    id: 'ffb86390-eeee-ffff-gggg-9d1180882d63',
  },
};

try {
  const response = await sensorInsightsRulesController.sensorInsightsListRulesRequest(body);

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
    } else if (error instanceof M404ManagementError) {
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
| 404 | Not Found | [`M404ManagementError`](../../doc/models/m404-management-error.md) |
| 406 | Not Acceptable | [`ManagementError`](../../doc/models/management-error.md) |
| 415 | Unsupported media type | [`ManagementError`](../../doc/models/management-error.md) |
| 429 | Too many requests | [`ManagementError`](../../doc/models/management-error.md) |
| 500 | Internal server error. | [`M500ManagementError`](../../doc/models/m500-management-error.md) |
| Default | Unexpected error | [`ManagementError`](../../doc/models/management-error.md) |

