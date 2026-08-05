
# Account Level Create Trigger

## Structure

`AccountLevelCreateTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger \| undefined`](../../doc/models/data-trigger.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |

## Example

```ts
import {
  AccountLevelActionEnum,
  AccountLevelCreateTrigger,
  ConditionTypeEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const accountLevelCreateTrigger: AccountLevelCreateTrigger = {
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.AccountUsage,
  dataTrigger: {
    accountLevel: {
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
      condition: ConditionTypeEnum.Individual,
      action: AccountLevelActionEnum.Suspend,
    },
  },
  notification: {
    notificationType: 'notificationType8',
    callback: false,
    emailNotification: false,
    notificationGroupName: 'notificationGroupName6',
    notificationFrequencyFactor: 22,
  },
};
```

