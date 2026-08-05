
# Triggers List Options 2

## Class Name

`TriggersListOptions2`

## Cases

| Type |
|  --- |
| [`AnomalyTriggerValue`](../../../doc/models/anomaly-trigger-value.md) |
| [`TriggerType2`](../../../doc/models/trigger-type-2.md) |

## AnomalyTriggerValue

### Initialization Code

#### Example

```ts
const value: TriggersListOptions2 = {
  triggerId: 'BE1B5958-3E11-41DB-9ABD-B1B7618C0035',
  triggerName: 'Anomaly Daily Usage REST Test-1',
  organizationName: 'AnamolyDetectionRTRTest',
  triggerCategory: 'UsageAnomaly',
  triggerAttributes: [
    {
      key: 'DataPercentage50',
    }
  ],
  createdAt: '2021-10-21T23:57:03.397.0000Z',
  modifiedAt: '2021-10-21T23:57:03.397.0000Z',
};
```

## TriggerType2

### Initialization Code

#### Example

```ts
const value: TriggersListOptions2 = {
  anomalyattributes: {
    accountNames: '0000123456-00001',
    deviceGroup: 'User Group 1',
    includeAbnormal: true,
    includeVeryAbnormal: true,
    includeUnderExpectedUsage: true,
    includeOverExpectedUsage: true,
  },
  notification: {
    notificationType: 'DailySummary',
    callback: true,
    emailNotification: true,
    notificationGroupName: 'Anomaly Test API',
    notificationFrequencyFactor: -2147483648,
    externalEmailRecipients: 'placeholder@verizon.com',
    smsNotification: true,
    smsNumbers: [
      {
        carrier: 'US Cellular',
        number: '9299280711',
      }
    ],
    reminder: false,
    severity: 'Critical',
  },
};
```

