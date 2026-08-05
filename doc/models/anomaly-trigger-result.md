
# Anomaly Trigger Result

A result containing a list of anomaly triggers.

## Structure

`AnomalyTriggerResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggers` | [`TriggersListOptions2[] \| undefined`](../../doc/models/containers/triggers-list-options-2.md) | Optional | Trigger value chunk details. |

## Example

```ts
import { AnomalyTriggerResult } from 'verizonlib';

const anomalyTriggerResult: AnomalyTriggerResult = {
  triggers: [
    {
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
    }
  ],
};
```

