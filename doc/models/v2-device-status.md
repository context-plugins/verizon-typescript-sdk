
# V2 Device Status

Device with id in IMEI.

## Structure

`V2DeviceStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `status` | `string` | Required | Success or failure. |
| `resultReason` | `string \| undefined` | Optional | Result reason. |

## Example

```ts
import { V2DeviceStatus } from 'verizonlib';

const v2DeviceStatus: V2DeviceStatus = {
  deviceId: '990000473475967',
  status: 'Failure',
  resultReason: 'Device does not exist.',
};
```

