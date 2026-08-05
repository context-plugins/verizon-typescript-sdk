
# Triggers List Options

## Structure

`TriggersListOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned name of the trigger being updated. |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger. |
| `organizationName` | `string \| undefined` | Optional | The user assigned name of the organization associated with the trigger. |
| `triggerCategory` | `string \| undefined` | Optional | This is the value to use in the request body to detect anomalous behaivior. The values in this table will only be relevant when this parameter is set to this value. |
| `triggerAttributes` | [`TriggerAttributesOptions2[] \| undefined`](../../doc/models/containers/trigger-attributes-options-2.md) | Optional | Additional details and keys for the trigger. |
| `createdAt` | `string \| undefined` | Optional | Timestamp for whe the trigger was created. |
| `modifiedAt` | `string \| undefined` | Optional | Timestamp for the most recent time the trigger was modified. |
| `anomalyattributes` | [`UsageAnomalyAttributes \| undefined`](../../doc/models/usage-anomaly-attributes.md) | Optional | The details of the UsageAnomaly trigger. |
| `notification` | [`TriggerNotification \| undefined`](../../doc/models/trigger-notification.md) | Optional | The notification details of the trigger. |

## Example

```ts
import { TriggersListOptions } from 'verizonlib';

const triggersListOptions: TriggersListOptions = {
  triggerId: 'BE1B5958-3E11-41DB-9ABD-B1B7618C0035',
  triggerName: 'Anomaly Daily Usage REST Test-1',
  organizationName: 'AnamolyDetectionRTRTest',
  triggerCategory: 'UsageAnomaly',
  triggerAttributes: [
    {
      key: 'DataPercentage50',
    }
  ],
  createdAt: '2021-10-21T23:57:03.397Z',
  modifiedAt: '2021-10-21T23:57:03.397Z',
};
```

