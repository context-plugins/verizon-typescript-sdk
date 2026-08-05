
# Actionobject

## Structure

`Actionobject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `suspend` | `boolean \| undefined` | Optional | - |
| `suspendDetails` | [`Suspenddetailsobject \| undefined`](../../doc/models/suspenddetailsobject.md) | Optional | - |
| `changePlan` | `boolean \| undefined` | Optional | a flag to set if the trigger changes service plans, true, or not, false |
| `changePlanDetails` | [`ChangePlanDetails \| undefined`](../../doc/models/change-plan-details.md) | Optional | The service plan code to switch to |

## Example

```ts
import { Actionobject, ThresholdUnitEnum } from 'verizonlib';

const actionobject: Actionobject = {
  suspend: true,
  suspendDetails: {
    suspendFromAccounts: [
      'suspendFromAccounts7'
    ],
    suspendDuration: 152,
    suspendOption: 'suspendOption2',
    threshold: 166,
    thresholdUnit: ThresholdUnitEnum.GB,
  },
  changePlan: true,
  changePlanDetails: {
    toCarrierServicePlanCode: 'toCarrierServicePlanCode2',
  },
};
```

