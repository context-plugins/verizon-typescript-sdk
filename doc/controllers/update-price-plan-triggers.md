# Update Price Plan Triggers

```ts
const updatePricePlanTriggersController = new UpdatePricePlanTriggersController(client);
```

## Class Name

`UpdatePricePlanTriggersController`


# Update Trigger Rules

Updates a usage trigger at the account level, device level or a price plan trigger for all devices on the account

```ts
async updateTriggerRules(
  body: UpdateTriggerRulesBody,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TriggerResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth1](../../doc/auth/oauth-2-client-credentials-grant-1.md) **OR** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateTriggerRulesBody`](../../doc/models/containers/update-trigger-rules-body.md) | Body, Required | This is a container for any-of cases. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful request

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`TriggerResponse`](../../doc/models/trigger-response.md).

## Example Usage

```ts
const body: UpdateTriggerRulesBody = {
  triggerId: 'b9cc1da6-ffff-eeee-gggg-7eba8859ab5e',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.AccountUsage,
  dataTrigger: {
    conditionType: ConditionTypeEnum.Aging,
  },
  notification: {
    notificationType: 'PerEvent',
    callback: true,
    emailNotification: false,
    notificationGroupName: 'NotificationGroupName',
    notificationFrequencyFactor: 3,
    notificationFrequencyInterval: 'Daily',
    externalEmailRecipients: 'ExternalEmailRecipients',
    smsNotification: true,
    smsNumbers: [
      {
        number: '10-digit mobile number',
        carrier: 'mobile service provider',
      },
      {
        number: '10-digit mobile number',
        carrier: 'mobile service provider',
      }
    ],
    reminder: true,
    severity: 'Notice',
  },
  active: ActiveEnum.True,
};

try {
  const response = await updatePricePlanTriggersController.updateTriggerRules(body);

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
    if (error instanceof RuleRestErrorResponseError) {
      console.log(error.result);
    }
  }
}
```

## Example Response *(as JSON)*

```json
{
  "triggerId": "be1b5958-ffff-eeee-gggg-b1b7618c0035"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | Error response | [`RuleRestErrorResponseError`](../../doc/models/rule-rest-error-response-error.md) |

