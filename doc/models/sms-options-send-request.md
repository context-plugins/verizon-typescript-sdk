
# SMS Options Send Request

## Structure

`SMSOptionsSendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `servicePlan` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9 ]{3,32}$` |
| `smsMessage` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9 ]{3,64}$` |

## Example

```ts
import { SMSOptionsSendRequest } from 'verizonlib';

const sMSOptionsSendRequest: SMSOptionsSendRequest = {
  servicePlan: 'the name of a service plan',
  smsMessage: 'A text message',
};
```

