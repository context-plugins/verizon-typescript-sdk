
# Usage Trigger Response

## Structure

`UsageTriggerResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string` | Required | Unique usage triggerId |
| `triggerName` | `string` | Required | Usage trigger name |
| `accountName` | `string` | Required | Account name |
| `serviceName` | [`ServiceNameEnum`](../../doc/models/service-name-enum.md) | Required | Service name<br><br>**Default**: `ServiceNameEnum.Location` |
| `thresholdValue` | `string` | Required | Percent of subscription at which trigger will send an alert |
| `allowExcess` | `boolean` | Required | allowExcess determines whether to restrict usage after exceeds limits |
| `sendSmsNotification` | `boolean` | Required | Send SMS (text) alerts when the thresholdValue is reached. |
| `smsPhoneNumbers` | `string` | Required | comma seperated value of list of Phone numbers for SMS notifications |
| `sendEmailNotification` | `boolean` | Required | Send email alerts when the thresholdValue is reached. |
| `emailAddresses` | `string` | Required | comma seperated value of list of Email addresses for Email notifications |
| `createDate` | `string` | Required | UTC Date when the usage trigger was created |
| `updateDate` | `string` | Required | UTC Date when the usage trigger was last updated |

## Example

```ts
import { ServiceNameEnum, UsageTriggerResponse } from 'verizonlib';

const usageTriggerResponse: UsageTriggerResponse = {
  triggerId: '3bb4777e-5292-4de7-97df-f578df4a2dbe',
  triggerName: '95% usage alert',
  accountName: '0212312345-00001',
  serviceName: ServiceNameEnum.Location,
  thresholdValue: '95',
  allowExcess: false,
  sendSmsNotification: false,
  smsPhoneNumbers: '5551231234',
  sendEmailNotification: false,
  emailAddresses: 'me@theinternet.com, you@theinternet.com',
  createDate: '2018-08-31',
  updateDate: '2018-09-03',
};
```

