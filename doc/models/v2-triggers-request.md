
# V2 Triggers Request

## Structure

`V2TriggersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | The user defined name of the trigger |
| `ecpdId` | `string \| undefined` | Optional | The Enterprise Customer Profile Database ID |
| `triggerCategory` | [`TriggerCategoryEnum \| undefined`](../../doc/models/trigger-category-enum.md) | Optional | The type of trigger being created or modified |
| `dataTrigger` | [`DataTrigger4 \| undefined`](../../doc/models/data-trigger-4.md) | Optional | - |
| `notification` | [`Notificationarray \| undefined`](../../doc/models/notificationarray.md) | Optional | - |
| `notificationType` | `string \| undefined` | Optional | - |
| `callback` | `boolean \| undefined` | Optional | - |
| `emailNotification` | `boolean \| undefined` | Optional | - |
| `notificationGroupName` | `string \| undefined` | Optional | - |
| `notificationFrequencyFactor` | `number \| undefined` | Optional | - |
| `notificationFrequencyInterval` | `string \| undefined` | Optional | - |
| `externalEmailRecipients` | `string \| undefined` | Optional | - |
| `smsNotification` | `boolean \| undefined` | Optional | - |
| `smsNumbers` | [`V2TriggersRequestSmsNumbers[] \| undefined`](../../doc/models/containers/v2-triggers-request-sms-numbers.md) | Optional | This is Array of a container for any-of cases. |
| `reminder` | `boolean \| undefined` | Optional | - |
| `severity` | `string \| undefined` | Optional | - |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | A flag to indicate of the trigger is active, true, or not, false |
| `filterCriteria` | [`AccountLevelFilter \| undefined`](../../doc/models/account-level-filter.md) | Optional | - |
| `condition` | [`V2TriggersRequestCondition \| undefined`](../../doc/models/containers/v2-triggers-request-condition.md) | Optional | This is a container for any-of cases. |
| `action` | [`AccountLevelActionEnum \| undefined`](../../doc/models/account-level-action-enum.md) | Optional | The action taken when trigger conditions are met |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account and must include leading zeroes |
| `pricePlanTrigger` | [`PricePlanTrigger1 \| undefined`](../../doc/models/price-plan-trigger-1.md) | Optional | - |

## Example

```ts
import {
  AccountLevelActionEnum,
  ActiveEnum,
  ComparitorEnum,
  ConditionTypeEnum,
  TriggerCategoryEnum,
  V2TriggersRequest,
} from 'verizonlib';

const v2TriggersRequest: V2TriggersRequest = {
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
    deviceGroup: {
      filterCriteria: {
        deviceGroupName: 'deviceGroupName4',
        individualOrCombined: 'IndividualOrCombined4',
        accountName: 'accountName0',
      },
    },
    conditionType: ConditionTypeEnum.Aging,
    comparitor: ComparitorEnum.Eq,
    threshold: 222,
  },
  notification: {
    notificationType: 'notificationType8',
    callback: false,
    emailNotification: false,
    notificationGroupName: 'notificationGroupName6',
    notificationFrequencyFactor: 22,
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
  action: AccountLevelActionEnum.Notify,
  accountName: '0000123456-00001',
};
```

