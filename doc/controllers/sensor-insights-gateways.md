# Sensor Insights Gateways

```ts
const sensorInsightsGatewaysController = new SensorInsightsGatewaysController(client);
```

## Class Name

`SensorInsightsGatewaysController`


# Sensor Insights List Gateway Devices Request

```ts
async sensorInsightsListGatewayDevicesRequest(
  body: DtoListDevicesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ResourceDevice[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`DtoListDevicesRequest`](../../doc/models/dto-list-devices-request.md) | Body, Required | Get gateway information |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: OK

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ResourceDevice[]`](../../doc/models/resource-device.md).

## Example Usage

```ts
const body: DtoListDevicesRequest = {
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
    deveui: 'The unique EUI64 address of the device',
    deviceid: 'The UUID of the device',
    esn: 223372036854775800,
    iccid: 'The 20-digit Integrated Circuit Card ID (SIM card ID)',
    imei: 223372036854775,
    imsi: 223372036854775800,
    mac: 'The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX',
    manufacturer: 'REOLINK',
    meid: 'The 56-bit Mobile Equipment ID',
    msisdn: 'The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number',
    nodeUuid: 'The UUID of the node the device is associated with',
    qrcode: 'The Quick Response (QR) code',
    serial: 'The device\'s serial number',
  },
};

try {
  const response = await sensorInsightsGatewaysController.sensorInsightsListGatewayDevicesRequest(body);

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

