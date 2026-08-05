
# Device Firmware Version

Device and firmware information.

## Structure

`DeviceFirmwareVersion`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string \| undefined` | Optional | - |
| `reason` | `string \| undefined` | Optional | - |
| `deviceId` | `string` | Required | Device IMEI. |
| `firmwareVersion` | `string` | Required | Device Firmware Version. |
| `firmwareVersionUpdateTime` | `string \| undefined` | Optional | - |

## Example

```ts
import { DeviceFirmwareVersion } from 'verizonlib';

const deviceFirmwareVersion: DeviceFirmwareVersion = {
  deviceId: '15-digit IMEI',
  firmwareVersion: 'SR1.2.0.0-10657',
  status: 'FirmwareVersionUpdateSuccess',
  reason: 'reason0',
  firmwareVersionUpdateTime: '2016-03-13T12:52:32.123Z',
};
```

