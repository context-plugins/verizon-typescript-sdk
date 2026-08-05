
# Create Trigger Request Options 2

## Class Name

`CreateTriggerRequestOptions2`

## Cases

| Type |
|  --- |
| [`TriggerType1`](../../../doc/models/trigger-type-1.md) |
| [`ActiveAnomalyIndicator`](../../../doc/models/active-anomaly-indicator.md) |
| [`ActiveTriggerIndicator`](../../../doc/models/active-trigger-indicator.md) |

## TriggerType1

### Initialization Code

#### Example

```ts
const value: CreateTriggerRequestOptions2 = {
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
};
```

## ActiveAnomalyIndicator

### Initialization Code

#### Example

```ts
const value: CreateTriggerRequestOptions2 = {
  active: true,
};
```

## ActiveTriggerIndicator

### Initialization Code

#### Example

```ts
const value: CreateTriggerRequestOptions2 = {
  active: true,
};
```

