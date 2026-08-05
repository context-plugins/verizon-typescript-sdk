
# Device Firmware Upgrade

Firmware upgrades information.

## Structure

`DeviceFirmwareUpgrade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device identifier. |
| `campaignId` | `string` | Required | Campaign identifier. |
| `accountName` | `string` | Required | Account identifier. |
| `firmwareName` | `string \| undefined` | Optional | Firmware name. |
| `firmwareFrom` | `string \| undefined` | Optional | Old firmware version. |
| `firmwareTo` | `string \| undefined` | Optional | New firmware version. |
| `startDate` | `string` | Required | Firmware upgrade start date. |
| `status` | `string` | Required | Firmware upgrade status. |
| `reason` | `string` | Required | Software upgrade result reason. |
| `reportUpdatedTime` | `string \| undefined` | Optional | Report updated time. |

## Example

```ts
import { DeviceFirmwareUpgrade } from 'verizonlib';

const deviceFirmwareUpgrade: DeviceFirmwareUpgrade = {
  deviceId: '15-digit IMEI',
  campaignId: '252d7ffc-7e35-11ec-931d-76f56843c393',
  accountName: '0000123456-00001',
  startDate: '2022-01-25',
  status: 'UpgradeSuccess',
  reason: 'Upgrade completed successfully',
  firmwareName: 'SEQUANSCommunications_GM01Q_SR1.2.0.0-10657_SR1.2.0.0-10512',
  firmwareFrom: 'SR1.2.0.0-10657',
  firmwareTo: 'SR1.2.0.0-10512',
  reportUpdatedTime: '2022-01-26 03:45:01.608 +0000 UTC',
};
```

