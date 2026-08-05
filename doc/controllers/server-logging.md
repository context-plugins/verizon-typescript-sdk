# Server Logging

```ts
const serverLoggingController = new ServerLoggingController(client);
```

## Class Name

`ServerLoggingController`


# Get Device Check In History

Check-in history can be retrieved for any device belonging to the account, not necessarily with logging enabled.

```ts
async getDeviceCheckInHistory(
  account: string,
  deviceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckInHistoryItem[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | `string` | Template, Required | Account identifier. |
| `deviceId` | `string` | Template, Required | Device IMEI identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: List of check-in history entries.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CheckInHistoryItem[]`](../../doc/models/check-in-history-item.md).

## Example Usage

```ts
const account = '0000123456-00001';

const deviceId = '990013907835573';

try {
  const response = await serverLoggingController.getDeviceCheckInHistory(
    account,
    deviceId
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
    if (error instanceof FotaV2ResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |

