
# Device Upgrade History

Firmware upgrade information.

## Structure

`DeviceUpgradeHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | Device IMEI. |
| `id` | `string \| undefined` | Optional | The unique identifier for the upgrade. |
| `accountName` | `string \| undefined` | Optional | The name (number) of the billing account that the device belongs to. |
| `firmwareFrom` | `string \| undefined` | Optional | The firmware version that was on the device before the upgrade. |
| `firmwareTo` | `string \| undefined` | Optional | The name of the firmware version that was on the device after the upgrade. |
| `startDate` | `string \| undefined` | Optional | The date of the upgrade. |
| `upgradeStartTime` | `string \| undefined` | Optional | The date and time that the upgrade actually started for this device. |
| `status` | `string \| undefined` | Optional | The status of the upgrade for this device. |
| `reason` | `string \| undefined` | Optional | More information about the status. |

## Example

```ts
import { DeviceUpgradeHistory } from 'verizonlib';

const deviceUpgradeHistory: DeviceUpgradeHistory = {
  deviceId: '900000000000001',
  id: 'f574fbb8-b291-4cc7-bf22-4e3f27977558',
  accountName: '0242078689-00001',
  firmwareFrom: 'VerizonFirmwareVersion-02',
  firmwareTo: 'VerizonFirmwareVersion-03',
  startDate: '2018-03-05',
  upgradeStartTime: '2018-03-05T19:07:21Z',
  status: 'UpgradeSuccess',
  reason: 'success',
};
```

