
# V2 Triggers Request 1

## Structure

`V2TriggersRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | The system assigned UUID of the trigger |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger5 \| undefined`](../../doc/models/data-trigger-5.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |
| `notificationType` | `string \| undefined` | Optional | - |
| `callback` | `boolean \| undefined` | Optional | - |
| `emailNotification` | `boolean \| undefined` | Optional | - |
| `notificationGroupName` | `string \| undefined` | Optional | - |
| `notificationFrequencyFactor` | `number \| undefined` | Optional | - |
| `notificationFrequencyInterval` | `string \| undefined` | Optional | - |
| `externalEmailRecipients` | `string \| undefined` | Optional | - |
| `smsNotification` | `boolean \| undefined` | Optional | - |
| `smsNumbers` | [`V2TriggersRequest1SmsNumbers[] \| undefined`](../../doc/models/containers/v2-triggers-request-1-sms-numbers.md) | Optional | This is Array of a container for any-of cases. |
| `reminder` | `boolean \| undefined` | Optional | - |
| `severity` | `string \| undefined` | Optional | - |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes |
| `pricePlanTrigger` | [`PricePlanTrigger2 \| undefined`](../../doc/models/price-plan-trigger-2.md) | Optional | - |

## Example

```ts
import {
  AccountLevelActionEnum,
  ActiveEnum,
  ComparitorEnum,
  ConditionTypeEnum,
  TriggerCategoryEnum,
  V2TriggersRequest1,
} from 'verizonlib';

const v2TriggersRequest1: V2TriggersRequest1 = {
  triggerId: 'be1b5958-ffff-eeee-gggg-b1b7618c0035',
  triggerName: 'name of the trigger',
  ecpdId: 'Verizon profile ID',
  triggerCategory: TriggerCategoryEnum.PricePlanDataUsage,
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
  accountName: '0000123456-00001',
};
```

