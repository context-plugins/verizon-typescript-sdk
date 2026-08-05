
# Price Plan Trigger

## Structure

`PricePlanTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `standAlone` | [`FiltercriteriaObjectCall \| undefined`](../../doc/models/filtercriteria-object-call.md) | Optional | - |
| `condition` | [`PricePlanTriggerCondition \| undefined`](../../doc/models/containers/price-plan-trigger-condition.md) | Optional | This is a container for any-of cases. |
| `action` | [`Actionobject \| undefined`](../../doc/models/actionobject.md) | Optional | - |

## Example

```ts
import {
  ConditionTypeEnum,
  PricePlanTrigger,
  ThresholdUnitEnum,
} from 'verizonlib';

const pricePlanTrigger: PricePlanTrigger = {
  standAlone: {
    filterCriteria: {
      carrierServicePlanCode: 'carrierServicePlanCode4',
      accountNameList: [
        'accountNameList7',
        'accountNameList8'
      ],
    },
  },
  condition: ConditionTypeEnum.Aging,
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

