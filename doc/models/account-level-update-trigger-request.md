
# Account Level Update Trigger Request

## Structure

`AccountLevelUpdateTriggerRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger1 \| undefined`](../../doc/models/data-trigger-1.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |
| `notificationType` | `string \| undefined` | Optional | - |
| `callback` | `boolean \| undefined` | Optional | - |
| `emailNotification` | `boolean \| undefined` | Optional | - |
| `notificationGroupName` | `string \| undefined` | Optional | - |
| `notificationFrequencyFactor` | `number \| undefined` | Optional | - |
| `notificationFrequencyInterval` | `string \| undefined` | Optional | - |
| `externalEmailRecipients` | `string \| undefined` | Optional | - |
| `smsNotification` | `boolean \| undefined` | Optional | - |
| `smsNumbers` | [`AccountLevelUpdateTriggerRequestSmsNumbers[] \| undefined`](../../doc/models/containers/account-level-update-trigger-request-sms-numbers.md) | Optional | This is Array of a container for any-of cases. |
| `reminder` | `boolean \| undefined` | Optional | - |
| `severity` | `string \| undefined` | Optional | - |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |

## Example

```ts
import {
  AccountLevelActionEnum,
  AccountLevelUpdateTriggerRequest,
  ActiveEnum,
  ComparitorEnum,
  ConditionTypeEnum,
  TriggerCategoryEnum,
} from 'verizonlib';

const accountLevelUpdateTriggerRequest: AccountLevelUpdateTriggerRequest = {
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
  notificationType: 'PerEvent',
  callback: true,
  emailNotification: false,
  notificationGroupName: 'Notification Group Name (User defined)',
  notificationFrequencyFactor: 3,
  notificationFrequencyInterval: 'Daily',
  externalEmailRecipients: 'Email addresses',
  smsNotification: true,
  reminder: true,
  severity: 'Notify',
  active: ActiveEnum.True,
};
```

