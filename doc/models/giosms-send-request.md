
# GIOSMS Send Request

## Structure

`GIOSMSSendRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `customFields` | [`KvPair[] \| undefined`](../../doc/models/kv-pair.md) | Optional | **Constraints**: *Maximum Items*: `5` |
| `dataEncoding` | `string \| undefined` | Optional | - |
| `groupName` | `string \| undefined` | Optional | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `timeToLive` | `string \| undefined` | Optional | A period of time the message remains valid or an end date for the message. This value would be less than the 5 day default. |
| `deviceIds` | [`GIODeviceId[] \| undefined`](../../doc/models/gio-device-id.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `smsMessage` | `string` | Required | - |

## Example

```ts
import { GIOSMSSendRequest } from 'verizonlib';

const gIOSMSSendRequest: GIOSMSSendRequest = {
  smsMessage: 'A text message',
  accountName: 'accountName4',
  customFields: [
    {
      key: 'key0',
      value: 'value2',
    },
    {
      key: 'key0',
      value: 'value2',
    }
  ],
  dataEncoding: 'dataEncoding2',
  groupName: 'groupName0',
  servicePlan: 'servicePlan0',
};
```

