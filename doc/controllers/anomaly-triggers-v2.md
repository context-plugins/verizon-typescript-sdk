# Anomaly Triggers V2

```ts
const anomalyTriggersV2Controller = new AnomalyTriggersV2Controller(client);
```

## Class Name

`AnomalyTriggersV2Controller`

## Methods

* [Create Anomaly Detection Trigger V2](../../doc/controllers/anomaly-triggers-v2.md#create-anomaly-detection-trigger-v2)
* [Update Anomaly Detection Trigger V2](../../doc/controllers/anomaly-triggers-v2.md#update-anomaly-detection-trigger-v2)
* [List Anomaly Detection Trigger Settings V2](../../doc/controllers/anomaly-triggers-v2.md#list-anomaly-detection-trigger-settings-v2)


# Create Anomaly Detection Trigger V2

Creates the trigger to identify an anomaly.

```ts
async createAnomalyDetectionTriggerV2(
  body: CreateTriggerRequestOptions2[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<AnomalyDetectionTrigger>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateTriggerRequestOptions2[]`](../../doc/models/containers/create-trigger-request-options-2.md) | Body, Required | Request to create an anomaly trigger. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Result of request to create a trigger for anomaly detection.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AnomalyDetectionTrigger`](../../doc/models/anomaly-detection-trigger.md).

## Example Usage

```ts
const body: CreateTriggerRequestOptions2[] = [
  {
    name: 'Anomaly Daily Usage REST Test-Patch 1',
    triggerCategory: 'UsageAnomaly',
    accountName: '0000123456-00001',
    anomalyTriggerRequest: {
      accountNames: '0000123456-00001',
      includeAbnormal: true,
      includeVeryAbnormal: true,
      includeUnderExpectedUsage: true,
      includeOverExpectedUsage: true,
    },
    notification: {
      notificationType: 'DailySummary',
      callback: true,
      emailNotification: false,
      notificationGroupName: 'Anomaly Test API',
      notificationFrequencyFactor: 3,
      notificationFrequencyInterval: 'Hourly',
      externalEmailRecipients: 'placeholder@verizon.com',
      smsNotification: true,
      smsNumbers: [
        {
          carrier: 'US Cellular',
          number: '9299280711',
        }
      ],
      reminder: true,
      severity: 'Critical',
    },
  }
];

try {
  const response = await anomalyTriggersV2Controller.createAnomalyDetectionTriggerV2(body);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "triggerId": "595f5c44-c31c-4552-8670-020a1545a84d"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | An error occurred. | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# Update Anomaly Detection Trigger V2

Updates an existing trigger using the account name.

```ts
async updateAnomalyDetectionTriggerV2(
  body: UpdateTriggerRequestOptions2[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<IntelligenceSuccessResult>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateTriggerRequestOptions2[]`](../../doc/models/containers/update-trigger-request-options-2.md) | Body, Required | Request to update existing trigger. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Success response.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IntelligenceSuccessResult`](../../doc/models/intelligence-success-result.md).

## Example Usage

```ts
const body: UpdateTriggerRequestOptions2[] = [
  {
    triggerId: '595f5c44-c31c-4552-8670-020a1545a84d',
    triggerName: 'Anomaly Daily Usage REST Test-Patch Update 4',
    triggerCategory: 'UsageAnomaly',
    accountName: '0000123456-00001',
    anomalyTriggerRequest: {
      accountNames: '0000123456-00001',
      includeAbnormal: true,
      includeVeryAbnormal: true,
      includeUnderExpectedUsage: false,
      includeOverExpectedUsage: true,
    },
    notification: {
      notificationType: 'DailySummary',
      callback: true,
      emailNotification: false,
      notificationGroupName: 'Anomaly Test API',
      notificationFrequencyFactor: 3,
      notificationFrequencyInterval: 'Hourly',
      externalEmailRecipients: 'placeholder@verizon.com',
      smsNotification: true,
      smsNumbers: [
        {
          carrier: 'US Cellular',
          number: '9299280711',
        }
      ],
      reminder: true,
      severity: 'Critical',
    },
  }
];

try {
  const response = await anomalyTriggersV2Controller.updateAnomalyDetectionTriggerV2(body);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "status": "Success"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | An error occurred. | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |


# List Anomaly Detection Trigger Settings V2

Retrieves the values for a specific trigger ID.

```ts
async listAnomalyDetectionTriggerSettingsV2(
  triggerId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<AnomalyTriggerResult>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Template, Required | The trigger ID of a specific trigger. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Anomaly detection trigger details.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`AnomalyTriggerResult`](../../doc/models/anomaly-trigger-result.md).

## Example Usage

```ts
const triggerId = 'be1b5958-3e11-41db-9abd-b1b7618c0035';

try {
  const response = await anomalyTriggersV2Controller.listAnomalyDetectionTriggerSettingsV2(triggerId);

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
    if (error instanceof IntelligenceResultError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "triggers": [
    {
      "triggerId": "BE1B5958-3E11-41DB-9ABD-B1B7618C0035",
      "triggerName": "Anomaly Daily Usage REST Test-1",
      "organizationName": "AnamolyDetectionRTRTest",
      "triggerCategory": "UsageAnomaly",
      "triggerAttributes": [
        {
          "key": "DataPercentage50",
          "value": false
        }
      ],
      "createdAt": "2021-10-21T23:57:03.397.0000Z",
      "modifiedAt": "2021-10-21T23:57:03.397.0000Z",
      "notification": {
        "notificationType": "DailySummary",
        "callback": true,
        "emailNotification": true,
        "notificationGroupName": "Anomaly Test API",
        "notificationFrequencyFactor": -2147483648,
        "externalEmailRecipients": "placeholder@verizon.com",
        "smsNotification": true,
        "smsNumbers": [
          {
            "carrier": "US Cellular",
            "number": "9299280711"
          }
        ],
        "reminder": false,
        "severity": "Critical"
      }
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | An error occurred. | [`IntelligenceResultError`](../../doc/models/intelligence-result-error.md) |

