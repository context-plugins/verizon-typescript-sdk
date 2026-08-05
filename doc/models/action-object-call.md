
# Action Object Call

## Structure

`ActionObjectCall`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | [`Actionobject \| undefined`](../../doc/models/actionobject.md) | Optional | - |

## Example

```ts
import { ActionObjectCall, ThresholdUnitEnum } from 'verizonlib';

const actionObjectCall: ActionObjectCall = {
  action: {
    suspend: false,
    suspendDetails: {
      suspendFromAccounts: [
        'suspendFromAccounts7'
      ],
      suspendDuration: 152,
      suspendOption: 'suspendOption2',
      threshold: 166,
      thresholdUnit: ThresholdUnitEnum.GB,
    },
    changePlan: false,
    changePlanDetails: {
      toCarrierServicePlanCode: 'toCarrierServicePlanCode2',
    },
  },
};
```

