
# Pay as You Go Price Plan Trigger

## Structure

`PayAsYouGoPricePlanTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payAsYouGo` | [`PayAsYouGoFilterCriteria \| undefined`](../../doc/models/pay-as-you-go-filter-criteria.md) | Optional | - |
| `condition` | [`PayAsYouGoPricePlanTriggerCondition \| undefined`](../../doc/models/containers/pay-as-you-go-price-plan-trigger-condition.md) | Optional | This is a container for any-of cases. |
| `action` | [`Actionobject \| undefined`](../../doc/models/actionobject.md) | Optional | - |

## Example

```ts
import {
  ConditionTypeEnum,
  PayAsYouGoPricePlanTrigger,
  ThresholdUnitEnum,
} from 'verizonlib';

const payAsYouGoPricePlanTrigger: PayAsYouGoPricePlanTrigger = {
  payAsYouGo: {
    filterCriteria: {
      carrierServicePlanCode: 'carrierServicePlanCode4',
      accountNameList: [
        'accountNameList7',
        'accountNameList8'
      ],
    },
  },
  condition: ConditionTypeEnum.Individual,
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

