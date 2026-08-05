# Anomaly Triggers

```ts
const anomalyTriggersController = new AnomalyTriggersController(client);
```

## Class Name

`AnomalyTriggersController`

## Methods

* [List Anomaly Detection Triggers](../../doc/controllers/anomaly-triggers.md#list-anomaly-detection-triggers)
* [Update Anomaly Detection Trigger](../../doc/controllers/anomaly-triggers.md#update-anomaly-detection-trigger)
* [Create Anomaly Detection Trigger](../../doc/controllers/anomaly-triggers.md#create-anomaly-detection-trigger)
* [List Anomaly Detection Trigger Settings](../../doc/controllers/anomaly-triggers.md#list-anomaly-detection-trigger-settings)
* [Delete Anomaly Detection Trigger](../../doc/controllers/anomaly-triggers.md#delete-anomaly-detection-trigger)


# List Anomaly Detection Triggers

This corresponds to the M2M-MC SOAP interface, `GetTriggers`.

```ts
async listAnomalyDetectionTriggers(
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTriggerResponseList[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: List of triggers associated to a Contact

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTriggerResponseList[]`](../../doc/models/get-trigger-response-list.md).

## Example Usage

```ts
try {
  const response = await anomalyTriggersController.listAnomalyDetectionTriggers();

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Update Anomaly Detection Trigger

This corresponds to the M2M-MC SOAP interface, `UpdateTriggerRequest`.

```ts
async updateAnomalyDetectionTrigger(
  body: UpdateTriggerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateTriggerRequest`](../../doc/models/update-trigger-request.md) | Body, Required | Update Trigger Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Trigger ID

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md).

## Example Usage

```ts
const body: UpdateTriggerRequest = {
  anomalyTriggerRequest: {
    accountNames: '0000123456-00001',
    includeAbnormal: true,
    includeVeryAbnormal: true,
    includeUnderExpectedUsage: true,
    includeOverExpectedUsage: true,
  },
};

try {
  const response = await anomalyTriggersController.updateAnomalyDetectionTrigger(body);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Create Anomaly Detection Trigger

This corresponds to the M2M-MC SOAP interface, `CreateTrigger`.

```ts
async createAnomalyDetectionTrigger(
  body: CreateTriggerRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTriggerRequest`](../../doc/models/create-trigger-request.md) | Body, Required | Create Trigger Request |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Trigger ID

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md).

## Example Usage

```ts
const body: CreateTriggerRequest = {
  anomalyTriggerRequest: {
    accountNames: '0000123456-00001',
    includeAbnormal: true,
    includeVeryAbnormal: true,
    includeUnderExpectedUsage: true,
    includeOverExpectedUsage: true,
  },
};

try {
  const response = await anomalyTriggersController.createAnomalyDetectionTrigger(body);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# List Anomaly Detection Trigger Settings

This corresponds to the M2M-MC SOAP interface, `GetTriggers`.

```ts
async listAnomalyDetectionTriggerSettings(
  triggerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetTriggerResponseList[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | trigger ID |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Trigger information associated to a Trigger Id

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetTriggerResponseList[]`](../../doc/models/get-trigger-response-list.md).

## Example Usage

```ts
const triggerId = 'be1b5958-3e11-41db-9abd-b1b7618c0035';

try {
  const response = await anomalyTriggersController.listAnomalyDetectionTriggerSettings(triggerId);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 401 | Unauthorized | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 403 | Forbidden | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 404 | Not Found / Does not exist | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 406 | Format / Request Unacceptable | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| 429 | Too many requests | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Delete Anomaly Detection Trigger

Deletes a specific trigger ID

```ts
async deleteAnomalyDetectionTrigger(
  triggerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | The trigger ID to be deleted |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: The ID of the deleted trigger is returned

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md).

## Example Usage

```ts
const triggerId = 'be1b5958-3e11-41db-9abd-b1b7618c0035';

try {
  const response = await anomalyTriggersController.deleteAnomalyDetectionTrigger(triggerId);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |

