
# Account Share Price Plan Trigger

## Structure

`AccountSharePricePlanTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountShare` | [`AccountShareFilterCriteria \| undefined`](../../doc/models/account-share-filter-criteria.md) | Optional | - |
| `condition` | [`AccountSharePricePlanTriggerCondition \| undefined`](../../doc/models/containers/account-share-price-plan-trigger-condition.md) | Optional | This is a container for any-of cases. |
| `changePlan` | `boolean \| undefined` | Optional | a flag to set if the trigger changes service plans, true, or not, false |
| `changePlanDetails` | [`ChangePlanDetails \| undefined`](../../doc/models/change-plan-details.md) | Optional | The service plan code to switch to |

## Example

```ts
import { AccountSharePricePlanTrigger, ConditionTypeEnum } from 'verizonlib';

const accountSharePricePlanTrigger: AccountSharePricePlanTrigger = {
  accountShare: {
    filterCriteria: {
      carrierServicePlanCode: 'carrierServicePlanCode4',
      accountNameList: [
        'accountNameList7',
        'accountNameList8'
      ],
    },
  },
  condition: ConditionTypeEnum.UsageAllowance,
  changePlan: true,
  changePlanDetails: {
    toCarrierServicePlanCode: 'toCarrierServicePlanCode2',
  },
};
```

