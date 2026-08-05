
# Device Firmware List

Device Firmware Information.

## Structure

`DeviceFirmwareList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `deviceFirmwarVersionList` | [`DeviceFirmwareVersion[] \| undefined`](../../doc/models/device-firmware-version.md) | Optional | List of device & firmware. |

## Example

```ts
import { DeviceFirmwareList } from 'verizonlib';

const deviceFirmwareList: DeviceFirmwareList = {
  accountName: '0000123456-00001',
  deviceFirmwarVersionList: [
    {
      deviceId: '15-digit IMEI',
      firmwareVersion: 'SR1.2.0.0-10657',
      status: 'FirmwareVersionUpdateSuccess',
      reason: 'reason8',
      firmwareVersionUpdateTime: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```

