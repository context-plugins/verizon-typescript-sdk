
# Trigger Notification

The notification details of the trigger.

## Structure

`TriggerNotification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notificationType` | `string \| undefined` | Optional | The type of notification, i.e. 'DailySummary'. |
| `callback` | `boolean \| undefined` | Optional | Whether or not the notification should be sent via callback.<br />true<br />false. |
| `emailNotification` | `boolean \| undefined` | Optional | Whether or not the notification should be sent via e-mail.<br />true<br />false. |
| `notificationGroupName` | `string \| undefined` | Optional | Name for the notification group. |
| `notificationFrequencyFactor` | `number \| undefined` | Optional | Frequency factor for notification. |
| `notificationFrequencyInterval` | `string \| undefined` | Optional | Frequency interval for notification. |
| `externalEmailRecipients` | `string \| undefined` | Optional | E-mail address(es) where the notification should be delivered. |
| `smsNotification` | `boolean \| undefined` | Optional | SMS notification. |
| `smsNumbers` | [`SMSNumber[] \| undefined`](../../doc/models/sms-number.md) | Optional | List of SMS numbers.<br><br>**Constraints**: *Maximum Items*: `10` |
| `reminder` | `boolean \| undefined` | Optional | - |
| `severity` | `string \| undefined` | Optional | Severity level associated with the notification. Examples would be:<br />Major<br />Minor<br />Critical<br />NotApplicable. |

## Example

```ts
import { TriggerNotification } from 'verizonlib';

const triggerNotification: TriggerNotification = {
  notificationType: 'DailySummary',
  callback: true,
  emailNotification: false,
  notificationGroupName: 'Anomaly Test API',
  notificationFrequencyFactor: 3,
  notificationFrequencyInterval: 'Hourly',
  externalEmailRecipients: 'placeholder@verizon.com',
  smsNotification: true,
  smsNumbers: [
    {
      carrier: 'US Cellular',
      number: '9299280711',
    }
  ],
  reminder: true,
  severity: 'Critical',
};
```

