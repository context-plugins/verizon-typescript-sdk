# Thing Space Qualityof Service API Actions

```ts
const thingSpaceQualityofServiceAPIActionsController = new ThingSpaceQualityofServiceAPIActionsController(client);
```

## Class Name

`ThingSpaceQualityofServiceAPIActionsController`

## Methods

* [Create a Thing Space Quality of Service API Subscription](../../doc/controllers/thing-space-qualityof-service-api-actions.md#create-a-thing-space-quality-of-service-api-subscription)
* [Stop a Thing Space Quality of Service API Subscription](../../doc/controllers/thing-space-qualityof-service-api-actions.md#stop-a-thing-space-quality-of-service-api-subscription)


# Create a Thing Space Quality of Service API Subscription

Creates a QoS elevation subscription ID and activates the subscription.

```ts
async createAThingSpaceQualityOfServiceAPISubscription(
  body: SubscribeRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<M201success>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SubscribeRequest`](../../doc/models/subscribe-request.md) | Body, Required | The request details to create a ThingSpace Quality of Service API subscription. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Success Response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`M201success`](../../doc/models/m201-success.md).

## Example Usage

```ts
const body: SubscribeRequest = {
  accountName: '0000123456-00001',
  deviceInfo: [
    {
      deviceId: {
        id: '10-digit phone number',
        kind: 'mdn',
      },
      flowInfo: [
        {
          flowServer: '[IPv6 address]:port',
          flowDevice: '[IPv6 address]:port',
          flowDirection: 'UPLINK',
          flowProtocol: 'UDP',
          qciOption: 'Premium',
        }
      ],
      deviceIPv6Addr: 'IPv6 address',
    }
  ],
};

try {
  const response = await thingSpaceQualityOfServiceAPIActionsController.createAThingSpaceQualityOfServiceAPISubscription(body);

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
    if (error instanceof DefaultResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error Response | [`DefaultResponseError`](../../doc/models/default-response-error.md) |


# Stop a Thing Space Quality of Service API Subscription

Stops an active ThingSpace Quality of Service API subscription using the account name and the subscription ID.

```ts
async stopAThingSpaceQualityOfServiceAPISubscription(
  accountName: string,
  qosSubscriptionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<M201success>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Query, Required | - |
| `qosSubscriptionId` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**201**: Success Response

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`M201success`](../../doc/models/m201-success.md).

## Example Usage

```ts
const accountName = '0000123456-00001';

const qosSubscriptionId = 'QoS subscription ID';

try {
  const response = await thingSpaceQualityOfServiceAPIActionsController.stopAThingSpaceQualityOfServiceAPISubscription(
    accountName,
    qosSubscriptionId
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
    if (error instanceof DefaultResponseError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error Response | [`DefaultResponseError`](../../doc/models/default-response-error.md) |

