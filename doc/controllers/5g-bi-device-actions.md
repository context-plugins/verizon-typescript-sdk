# 5G BI Device Actions

```ts
const m5gBIDeviceActionsController = new M5gBIDeviceActionsController(client);
```

## Class Name

`M5gBIDeviceActionsController`

## Methods

* [Business Internetlist Device Information](../../doc/controllers/5g-bi-device-actions.md#business-internetlist-device-information)
* [Business Internetactivate Using POST](../../doc/controllers/5g-bi-device-actions.md#business-internetactivate-using-post)
* [Business Internet Serviceplanchange](../../doc/controllers/5g-bi-device-actions.md#business-internet-serviceplanchange)


# Business Internetlist Device Information

Uses the decive's Integrated Circuit Card Identification Number (ICCID) to retrive and display the device's properties.

```ts
async businessInternetlistDeviceInformation(
  body: M5gBideviceId,
  requestOptions?: RequestOptions
): Promise<ApiResponse<M5gBideviceDetailsresponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **OR** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`M5gBideviceId`](../../doc/models/m5-g-bidevice-id.md) | Body, Required | Device Profile Query |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: The device's details will be returned from a successful request.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`M5gBideviceDetailsresponse`](../../doc/models/m5-g-bidevice-detailsresponse.md).

## Example Usage

```ts
const body: M5gBideviceId = {
  deviceId: {
    id: '20-digit ICCID',
    kind: 'iccid',
  },
};

try {
  const response = await m5gBIDeviceActionsController.businessInternetlistDeviceInformation(body);

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
    if (error instanceof M5gBiRestErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`M5gBiRestErrorResponseError`](../../doc/models/m5-g-bi-rest-error-response-error.md) |


# Business Internetactivate Using POST

Uses the device's ICCID and IMEI to activate service.

```ts
async businessInternetactivateUsingPOST(
  body: M5gBiactivateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<M5gBiRequestResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **OR** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`M5gBiactivateRequest`](../../doc/models/m5-g-biactivate-request.md) | Body, Required | Activate 5G BI service. Defining <code>publicIpRestriction</code> as "Unrestricted" or "Restricted" is required for activating as Public Static. Leave  <code>publicIpRestriction</code> undefined to activate as Public Dynamic. Removing <code>publicIpRestriction</code> from the request will activate as Mobile Private Network (MPN). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A request ID is returned as a successful response. Use a callback to see the details associated with the request ID.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`M5gBiRequestResponse`](../../doc/models/m5-g-bi-request-response.md).

## Example Usage

```ts
const body: M5gBiactivateRequest = {
  accountName: '0000123456-00001',
  servicePlan: 'service plan name',
  deviceListWithServiceAddress: [
    {
      deviceId: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        },
        {
          id: '20-digit ICCID',
          kind: 'iccid',
        }
      ],
    },
    {
    }
  ],
  skuNumber: 'VZW Stock Keeping Unit number',
  publicIpRestriction: 'Unrestricted',
  carrierName: 'Verizon Wireless',
  mdnZipCode: 'the 5-digit ZIP code of the Mobile Directory Number (MDN)',
};

try {
  const response = await m5gBIDeviceActionsController.businessInternetactivateUsingPOST(body);

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
    if (error instanceof M5gBiRestErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`M5gBiRestErrorResponseError`](../../doc/models/m5-g-bi-rest-error-response-error.md) |


# Business Internet Serviceplanchange

Change a device's service plan to use 5G BI.

```ts
async businessInternetServiceplanchange(
  body: M5gBichangeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<M5gBiRequestResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **OR** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`M5gBichangeRequest`](../../doc/models/m5-g-bichange-request.md) | Body, Required | This endpoint is for use when changing a device's service plan to a 5G BI service plan. The service plan can change for an active device up to four times per month but will require address validation for each change. The service plan cannot be changed for a device while its service is suspended. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: A request ID is returned as a successful response. Use a callback to see the details associated with the request ID.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`M5gBiRequestResponse`](../../doc/models/m5-g-bi-request-response.md).

## Example Usage

```ts
const body: M5gBichangeRequest = {
  accountName: '0000123456-00001',
  servicePlan: '5G BI service plan name being changed to',
  deviceListWithServiceAddress: [
    {
      deviceId: [
        {
          id: '15-digit IMEI',
          kind: 'imei',
        }
      ],
    },
    {
    }
  ],
  currentServicePlan: 'Optional name of the plan being changed from',
};

try {
  const response = await m5gBIDeviceActionsController.businessInternetServiceplanchange(body);

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
    if (error instanceof M5gBiRestErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "requestId": "d1f08526-5443-4054-9a29-4456490ea9f8"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`M5gBiRestErrorResponseError`](../../doc/models/m5-g-bi-rest-error-response-error.md) |

