# HPL Device Management

```ts
const hPLDeviceManagementController = new HPLDeviceManagementController(client);
```

## Class Name

`HPLDeviceManagementController`


# Add Devices Hyper Precise

Use this API if you want to manage some device settings before you are ready to activate service for the devices.

```ts
async addDevicesHyperPrecise(
  body: HplAddDevicesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<HplAddDevicesRequest[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`HplAddDevicesRequest`](../../doc/models/hpl-add-devices-request.md) | Body, Required | Devices to add to the account. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: For each device in the request, contains device identifiers and a success or failure response.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`HplAddDevicesRequest[]`](../../doc/models/hpl-add-devices-request.md).

## Example Usage

```ts
const body: HplAddDevicesRequest = {
  state: 'preactive',
  devicesToAdd: [
    {
      deviceIds: [
        {
          kind: 'imei',
          id: '15-digit IMEI',
        },
        {
          kind: 'iccid',
          id: '20-digit ICCID',
        }
      ],
    },
    {
      deviceIds: [
        {
          kind: 'imei',
          id: '15-digit IMEI',
        },
        {
          kind: 'iccid',
          id: '20-digit ICCID',
        }
      ],
    }
  ],
  accountName: '0000123456-00001',
  customFields: [
    {
      key: 'CustomField2',
      value: 'SuperVend',
    }
  ],
  groupName: 'West Region',
};

try {
  const response = await hPLDeviceManagementController.addDevicesHyperPrecise(body);

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
[
  {
    "deviceIds": [
      {
        "id": "20-digit ICCID",
        "kind": "iccid"
      }
    ],
    "response": "Success"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request. | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 401 | Unauthorized | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 403 | Forbidden | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 404 | Not Found / Does not exist | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 405 | Method Not Allowed | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 406 | Format / Request Unacceptable | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 429 | Too many requests | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| 500 | Internal Server Error | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |
| Default | Error response | [`HyperPreciseLocationResultError`](../../doc/models/hyper-precise-location-result-error.md) |

