
# Update Trigger Request

## Structure

`UpdateTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `active` | `boolean \| undefined` | Optional | - |
| `anomalyTriggerRequest` | [`AnomalyTriggerRequest \| undefined`](../../doc/models/anomaly-trigger-request.md) | Optional | The details of the UsageAnomaly trigger. |
| `cycleType` | [`CycleTypeEnum \| undefined`](../../doc/models/cycle-type-enum.md) | Optional | - |
| `dataTriggerRequest` | [`DataTriggerRequest \| undefined`](../../doc/models/data-trigger-request.md) | Optional | - |
| `groupName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `promoAlertTriggerRequest` | [`PromoAlertTriggerRequest \| undefined`](../../doc/models/promo-alert-trigger-request.md) | Optional | - |
| `sessionTriggerRequest` | [`SessionTriggerRequest \| undefined`](../../doc/models/session-trigger-request.md) | Optional | - |
| `smsTriggerRequest` | [`SMSTriggerRequest \| undefined`](../../doc/models/sms-trigger-request.md) | Optional | - |
| `triggerCategory` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `triggerId` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `triggerName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example

```ts
import { CycleTypeEnum, UpdateTriggerRequest } from 'verizonlib';

const updateTriggerRequest: UpdateTriggerRequest = {
  accountName: 'accountName6',
  active: false,
  anomalyTriggerRequest: {
    accountNames: '0000123456-00001',
    includeAbnormal: true,
    includeVeryAbnormal: true,
    includeUnderExpectedUsage: true,
    includeOverExpectedUsage: true,
  },
  cycleType: CycleTypeEnum.Cycleone,
  dataTriggerRequest: {
    comparator: 'comparator2',
    threshold: 100,
    thresholdUnit: 'thresholdUnit6',
  },
};
```

