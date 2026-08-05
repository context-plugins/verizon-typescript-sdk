# Account Subscriptions

```ts
const accountSubscriptionsController = new AccountSubscriptionsController(client);
```

## Class Name

`AccountSubscriptionsController`


# List Account Subscriptions

Retrieves the total number of SIM-Secure for IoT subscription licenses purchased for your account by license type, and lists the number of licenses assigned and available for each license type.

```ts
async listAccountSubscriptions(
  body: SecuritySubscriptionRequest,
  xRequestID?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SecuritySubscriptionResult>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SecuritySubscriptionRequest`](../../doc/models/security-subscription-request.md) | Body, Required | Request for account subscription. |
| `xRequestID` | `string \| undefined` | Header, Optional | Transaction Id.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]-[0-9]{3,32}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Security subscription result.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SecuritySubscriptionResult`](../../doc/models/security-subscription-result.md).

## Example Usage

```ts
const body: SecuritySubscriptionRequest = {
  accountName: '000012345600001',
  skuNumber: 'SIMSec-IoT-Lt',
};

try {
  const response = await accountSubscriptionsController.listAccountSubscriptions(body);

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
  "accountName": "000012345600001",
  "subscriptionList": [
    {
      "skuNumber": "TS-BUNDLE-KTO-SIMSEC-MRC",
      "licenseType": "Flexible Bundle",
      "licensePurchased": 9,
      "licenseAssigned": 7,
      "licenseAvailable": 1
    }
  ]
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

