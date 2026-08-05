# Device-Role-Controller

```ts
const deviceRoleController = new DeviceRoleController(client);
```

## Class Name

`DeviceRoleController`


# Get ACL Rules by Vendor Id

This API allows the user to get the access control rules defined for them.

```ts
async getACLRulesByVendorId(
  vendorID: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceRole[]>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [sessionToken](../../doc/auth/custom-header-signature-1.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vendorID` | `string` | Query, Required | The user's Vendor ID<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: List of Access Rules

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeviceRole[]`](../../doc/models/device-role.md).

## Example Usage

```ts
const vendorID = 'TestVendor';

try {
  const response = await deviceRoleController.getACLRulesByVendorId(vendorID);

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
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | `ApiError` |
| 401 | Unauthorized | `ApiError` |
| 403 | Forbidden | `ApiError` |
| 406 | Not Acceptable | `ApiError` |
| 429 | Too many requests | `ApiError` |
| Default | unexpected error | `ApiError` |

