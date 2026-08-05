
# Update Trigger Request Options 2

## Class Name

`UpdateTriggerRequestOptions2`

## Cases

| Type |
|  --- |
| [`TriggerType3`](../../../doc/models/trigger-type-3.md) |
| [`ActiveAnomalyIndicator`](../../../doc/models/active-anomaly-indicator.md) |

## TriggerType3

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRequestOptions2 = {
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
};
```

## ActiveAnomalyIndicator

### Initialization Code

#### Example

```ts
const value: UpdateTriggerRequestOptions2 = {
  active: true,
};
```

