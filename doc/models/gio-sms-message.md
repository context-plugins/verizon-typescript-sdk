
# GIO Sms Message

## Structure

`GIOSmsMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`GIODeviceId[] \| undefined`](../../doc/models/gio-device-id.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `message` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `120`, *Pattern*: `^[A-Za-z0-9 ]{3,120}$` |
| `timestamp` | `string \| undefined` | Optional | - |

## Example

```ts
import { GIOSmsMessage } from 'verizonlib';

const gIOSmsMessage: GIOSmsMessage = {
  deviceIds: [
    {
      kind: 'kind8',
      id: 'id0',
    },
    {
      kind: 'kind8',
      id: 'id0',
    },
    {
      kind: 'kind8',
      id: 'id0',
    }
  ],
  message: 'a text message',
  timestamp: '2016-03-13T12:52:32.123Z',
};
```

