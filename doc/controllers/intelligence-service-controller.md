# Intelligence Service Controller

```ts
const intelligenceServiceController = new IntelligenceServiceController(client);
```

## Class Name

`IntelligenceServiceController`

## Methods

* [Set Connection Planner](../../doc/controllers/intelligence-service-controller.md#set-connection-planner)
* [Status Connection Planner](../../doc/controllers/intelligence-service-controller.md#status-connection-planner)


# Set Connection Planner

Retrieves available device windows for Connection Planner.

```ts
async setConnectionPlanner(
  body?: GetDevicesWindowsRequestforplanner,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AsynchronousRequestResultforplanner>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetDevicesWindowsRequestforplanner \| undefined`](../../doc/models/get-devices-windows-requestforplanner.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: The asynchronous request status.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AsynchronousRequestResultforplanner`](../../doc/models/asynchronous-request-resultforplanner.md).

## Example Usage

```ts
const body: GetDevicesWindowsRequestforplanner = {
  accountNumber: '0000123456-00001',
  filter: 'All or Best or Worst',
  devices: [
    {
      deviceIds: [
        {
          kind: 'imei',
          id: '15-digit IMEI value',
        }
      ],
    }
  ],
};

try {
  const response = await intelligenceServiceController.setConnectionPlanner(body);

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
    if (error instanceof RestErrorResponseforplannerError) {
      console.log(error.result);
    } else if (error instanceof AuthRestErrorResponseforplannerError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d24cc6e4-eeee-ffff-gggg-0ffbb091c076"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 401 | Unauthorized | [`AuthRestErrorResponseforplannerError`](../../doc/models/auth-rest-error-responseforplanner-error.md) |
| 403 | Forbidden | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 404 | Not Found / Does not exist | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 406 | Format / Request Unacceptable | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 429 | Too many requests | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| Default | Error response | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |


# Status Connection Planner

Retrieves the device status for the Connection Planner service.

```ts
async statusConnectionPlanner(
  body?: GetDeviceStatusesRequestforplanner,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetDeviceStatusesResponseforplanner>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`GetDeviceStatusesRequestforplanner \| undefined`](../../doc/models/get-device-statuses-requestforplanner.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Success

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetDeviceStatusesResponseforplanner`](../../doc/models/get-device-statuses-responseforplanner.md).

## Example Usage

```ts
const body: GetDeviceStatusesRequestforplanner = {
  accountNumber: '0000123456-00001',
  requestId: 'd24cc6e4-eeee-ffff-gggg-0ffbb091c076',
};

try {
  const response = await intelligenceServiceController.statusConnectionPlanner(body);

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
    if (error instanceof RestErrorResponseforplannerError) {
      console.log(error.result);
    } else if (error instanceof AuthRestErrorResponseforplannerError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "accountNumber": "0000123456-00001",
  "requestId": "d24cc6e4-eeee-ffff-gggg-0ffbb091c076",
  "deviceStatusList": [
    {
      "deviceIds": [
        {
          "kind": "Imei",
          "id": "15-digit IMEI"
        }
      ],
      "status": "SUCCESS",
      "reason": "reason for the status"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 401 | Unauthorized | [`AuthRestErrorResponseforplannerError`](../../doc/models/auth-rest-error-responseforplanner-error.md) |
| 403 | Forbidden | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 404 | Not Found / Does not exist | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 406 | Format / Request Unacceptable | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| 429 | Too many requests | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |
| Default | Error response | [`RestErrorResponseforplannerError`](../../doc/models/rest-error-responseforplanner-error.md) |

