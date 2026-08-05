# Device Reports

```ts
const deviceReportsController = new DeviceReportsController(client);
```

## Class Name

`DeviceReportsController`

## Methods

* [Calculate Aggregated Report Synchronous](../../doc/controllers/device-reports.md#calculate-aggregated-report-synchronous)
* [Calculate Aggregated Report Asynchronous](../../doc/controllers/device-reports.md#calculate-aggregated-report-asynchronous)
* [Get Sessions Report](../../doc/controllers/device-reports.md#get-sessions-report)


# Calculate Aggregated Report Synchronous

Calculate aggregated report per day with number of sessions and usage information. User will receive synchronous response for specified list of devices (Max 10) and date range (Max 180 days).

```ts
async calculateAggregatedReportSynchronous(
  body: AggregateSessionReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AggregateSessionReport>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AggregateSessionReportRequest`](../../doc/models/aggregate-session-report-request.md) | Body, Required | Aggregated report request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A successful response shows session and usage details for up to 10 devices.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AggregateSessionReport`](../../doc/models/aggregate-session-report.md).

## Example Usage

```ts
const body: AggregateSessionReportRequest = {
  accountNumber: '0000123456-00001',
  imei: [
    '15-digit IMEI'
  ],
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  deviceGroup: 'string',
  dataPlan: 'string',
  noSessionFlag: false,
};

try {
  const response = await deviceReportsController.calculateAggregatedReportSynchronous(body);

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
    if (error instanceof HyperPreciseLocationResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |


# Calculate Aggregated Report Asynchronous

Calculate aggregated report per day with number of sessions and usage information. User will receive an asynchronous callback for the specified list of devices (Max 10000) and date range (Max 180 days).

```ts
async calculateAggregatedReportAsynchronous(
  body: AggregateSessionReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AggregatedReportCallbackResult>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AggregateSessionReportRequest`](../../doc/models/aggregate-session-report-request.md) | Body, Required | Aggregated session report request. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A successful response shows the request is queued with a unique `txid` to identify the report data with.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AggregatedReportCallbackResult`](../../doc/models/aggregated-report-callback-result.md).

## Example Usage

```ts
const body: AggregateSessionReportRequest = {
  accountNumber: '0000123456-00001',
  imei: [
    '15-digit IMEI'
  ],
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  deviceGroup: 'string',
  dataPlan: 'string',
  noSessionFlag: false,
};

try {
  const response = await deviceReportsController.calculateAggregatedReportAsynchronous(body);

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
    if (error instanceof HyperPreciseLocationResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "txid": "60c07fff-eeee-ffff-gggg-75e6a7c238f6",
  "status": "QUEUED"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |


# Get Sessions Report

Detailed report of session duration and number of bytes transferred per day.

```ts
async getSessionsReport(
  body: SessionReportRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SessionReport>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SessionReportRequest`](../../doc/models/session-report-request.md) | Body, Required | Request for sessions report. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A successful response includes the session information for an individual device.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SessionReport`](../../doc/models/session-report.md).

## Example Usage

```ts
const body: SessionReportRequest = {
  accountNumber: '0000123456-00001',
  imei: '15-digit IMEI',
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  durationLow: 0,
  durationHigh: 0,
};

try {
  const response = await deviceReportsController.getSessionsReport(body);

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
    if (error instanceof HyperPreciseLocationResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "The 10-digit ID of the device",
  "txid": "60c07fff-eeee-ffff-gggg-75e6a7c238f6",
  "sessions": [
    {
      "startTime": "Start date of session. ISO 8601 format.",
      "endTime": "End date of session. ISO 8601 format.",
      "numBytes": 0
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized request. Access token is missing or invalid. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Bad request. Not found. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 409 | Bad request. Conflict state. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |

