
# Usage Trigger Add Request

## Structure

`UsageTriggerAddRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerName` | `string \| undefined` | Optional | Usage trigger name |
| `accountName` | `string` | Required | Account name |
| `serviceName` | [`ServiceNameEnum`](../../doc/models/service-name-enum.md) | Required | Service name<br><br>**Default**: `ServiceNameEnum.Location` |
| `thresholdValue` | `string` | Required | The percent of subscribed usage required to activate the trigger, such as 90 or 100. |
| `allowExcess` | `boolean \| undefined` | Optional | Allow additional requests after thresholdValue is reached. (currently not functional) |
| `sendSmsNotification` | `boolean \| undefined` | Optional | Send SMS (text) alerts when the thresholdValue is reached. |
| `smsPhoneNumbers` | `string \| undefined` | Optional | Comma-separated list of phone numbers to send SMS alerts to. Digits only; no dashes or parentheses, etc. |
| `sendEmailNotification` | `boolean \| undefined` | Optional | Send email alerts when the thresholdValue is reached. |
| `emailAddresses` | `string \| undefined` | Optional | Comma-separated list of email addresses to send alerts to. |

## Example

```ts
import { ServiceNameEnum, UsageTriggerAddRequest } from 'verizonlib';

const usageTriggerAddRequest: UsageTriggerAddRequest = {
  accountName: '0212312345-00001',
  serviceName: ServiceNameEnum.Location,
  thresholdValue: '95',
  triggerName: '95% usage alert',
  allowExcess: false,
  sendSmsNotification: false,
  smsPhoneNumbers: '5551231234',
  sendEmailNotification: false,
  emailAddresses: 'you@theinternet.com',
};
```

