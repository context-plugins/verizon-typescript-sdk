
# Account Level Update Trigger

## Structure

`AccountLevelUpdateTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger1 \| undefined`](../../doc/models/data-trigger-1.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |

## Example

```ts
import {
  AccountLevelActionEnum,
  AccountLevelUpdateTrigger,
  ComparitorEnum,
  ConditionTypeEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const accountLevelUpdateTrigger: AccountLevelUpdateTrigger = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.DeviceGroupUsage,
  dataTrigger: {
    filterCriteria: {
      separateOrCombined: 'separateOrCombined4',
      accountNames: {
        accountNameList: [
          'accountNameList7',
          'accountNameList8',
          'accountNameList9'
        ],
      },
    },
    condition: ConditionTypeEnum.UsageAllowance,
    action: AccountLevelActionEnum.Notify,
    conditionType: ConditionTypeEnum.Aging,
    comparitor: ComparitorEnum.Eq,
  },
};
```

