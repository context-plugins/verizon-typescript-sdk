# SIM Securefor Io T Licenses

```ts
const sIMSecureforIoTLicensesController = new SIMSecureforIoTLicensesController(client);
```

## Class Name

`SIMSecureforIoTLicensesController`

## Methods

* [Assign License to Devices](../../doc/controllers/sim-securefor-io-t-licenses.md#assign-license-to-devices)
* [Unassign License to Devices](../../doc/controllers/sim-securefor-io-t-licenses.md#unassign-license-to-devices)


# Assign License to Devices

Assigns SIM-Secure for IoT licenses to SIMs.

```ts
async assignLicenseToDevices(
  body: AssignLicenseRequest,
  xRequestID?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SecuritySuccessResult>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AssignLicenseRequest`](../../doc/models/assign-license-request.md) | Body, Required | Request to assign license to devices. |
| `xRequestID` | `string \| undefined` | Header, Optional | Transaction Id.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]-[0-9]{3,32}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Success response.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SecuritySuccessResult`](../../doc/models/security-success-result.md).

## Example Usage

```ts
const body: AssignLicenseRequest = {
  accountName: '0000123456-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '864508030109877',
          kind: 'IMEI',
        }
      ],
    }
  ],
  skuNumber: 'SIMSec-IoT-Lt',
};

try {
  const response = await sIMSecureForIoTLicensesController.assignLicenseToDevices(body);

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
    if (error instanceof SecurityResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "c3f3d17c-79ff-4b35-82df-94446785b6e0"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 401 | Unauthorized request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 403 | Request Forbidden. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 404 | Not Found / Does not exist. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 406 | Format / Request Unacceptable. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 429 | Too many requests. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| Default | Error response. | [`SecurityResultError`](../../doc/models/security-result-error.md) |


# Unassign License to Devices

Unassigns SIM-Secure for IoT Flexible and Flexible Bundle license from SIMs.

```ts
async unassignLicenseToDevices(
  xRequestID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SecuritySuccessResult>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `xRequestID` | `string` | Header, Required | Transaction Id.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]-[0-9]{3,32}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Success response.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SecuritySuccessResult`](../../doc/models/security-success-result.md).

## Example Usage

```ts
const xRequestID = 'X-Request-ID2';

try {
  const response = await sIMSecureForIoTLicensesController.unassignLicenseToDevices(xRequestID);

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
    if (error instanceof SecurityResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "1f28c944-d007-44c9-9543-003b8820cc69"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 401 | Unauthorized request. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 403 | Request forbidden. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 404 | Not Found / Does not exist. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 406 | Format / Request Unacceptable. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| 429 | Too many requests. | [`SecurityResultError`](../../doc/models/security-result-error.md) |
| Default | Error response. | [`SecurityResultError`](../../doc/models/security-result-error.md) |

