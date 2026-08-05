# Account Service Controller

```ts
const accountServiceController = new AccountServiceController(client);
```

## Class Name

`AccountServiceController`


# Get Account Information Using GET

Returns aaccount information associated with a specified account.

```ts
async getAccountInformationUsingGET(
  accountName: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetAccountInformationResponseforplanner>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Template, Required | The account's numeric name, including leading zeroes. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: The account information related to an account.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetAccountInformationResponseforplanner`](../../doc/models/get-account-information-responseforplanner.md).

## Example Usage

```ts
const accountName = '0000123456-00002';

try {
  const response = await accountServiceController.getAccountInformationUsingGET(accountName);

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
  "accountName": "string",
  "accountNumber": "0000123456-00001",
  "carriers": [
    "carrier name(s)"
  ],
  "features": [
    "feature names"
  ],
  "ipPools": [
    {
      "isDefaultPool": true,
      "poolName": "name of the pool",
      "poolType": "type of pool"
    }
  ],
  "isProvisioningAllowed": true,
  "organizationName": "Org Name",
  "servicePlans": [
    {
      "carrierServicePlanCode": "name of the service plan code",
      "code": "the activation code",
      "extendedAttributes": [
        {
          "key": "key name",
          "value": "key value"
        }
      ],
      "name": "name of the active profile carrier",
      "sizeKb": 1000
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

