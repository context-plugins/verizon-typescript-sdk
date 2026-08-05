# Software Management Subscriptions V3

```ts
const softwareManagementSubscriptionsV3Controller = new SoftwareManagementSubscriptionsV3Controller(client);
```

## Class Name

`SoftwareManagementSubscriptionsV3Controller`


# Get Account Subscription Status

This endpoint retrieves a FOTA subscription by account.

```ts
async getAccountSubscriptionStatus(
  acc: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<FotaV3Subscription>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: FOTA Subscription.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`FotaV3Subscription`](../../doc/models/fota-v3-subscription.md).

## Example Usage

```ts
const acc = '0000123456-00001';

try {
  const response = await softwareManagementSubscriptionsV3Controller.getAccountSubscriptionStatus(acc);

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
    if (error instanceof FotaV3ResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "accountName": "0000123456-000001",
  "purchaseType": "TS-HFOTA-EVNT,TS-HFOTA-MRC",
  "licenseCount": 500,
  "licenseUsedCount": 400,
  "updateTime": "2020-09-17T21:11:32.170Z"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV3ResultError`](../../doc/models/fota-v3-result-error.md) |

