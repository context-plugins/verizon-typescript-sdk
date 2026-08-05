
# SMS Event History Request

## Structure

`SMSEventHistoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`GIODeviceId`](../../doc/models/gio-device-id.md) | Required | - |
| `earliest` | `string \| undefined` | Optional | - |
| `latest` | `string \| undefined` | Optional | - |

## Example

```ts
import { SMSEventHistoryRequest } from 'verizonlib';

const sMSEventHistoryRequest: SMSEventHistoryRequest = {
  deviceId: {
    kind: 'eid',
    id: '12345678901234567890123456789012',
  },
  earliest: '2016-03-13T12:52:32.123Z',
  latest: '2016-03-13T12:52:32.123Z',
};
```

