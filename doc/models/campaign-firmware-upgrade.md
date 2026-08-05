
# Campaign Firmware Upgrade

Firmware upgrade for devices.

## Structure

`CampaignFirmwareUpgrade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignName` | `string \| undefined` | Optional | Campaign name. |
| `firmwareName` | `string` | Required | Firmware name to upgrade to. |
| `firmwareFrom` | `string` | Required | Old firmware version. |
| `firmwareTo` | `string` | Required | New firmware version. |
| `protocol` | `string` | Required | Valid values include: LWM2M, OMA and HTTP.<br><br>**Default**: `'LWM2M'` |
| `startDate` | `string` | Required | Campaign start date. |
| `endDate` | `string` | Required | Campaign end date. |
| `campaignTimeWindowList` | [`V3TimeWindow[] \| undefined`](../../doc/models/v3-time-window.md) | Optional | List of allowed campaign time windows. |
| `deviceList` | `string[]` | Required | Device IMEI list. |
| `autoAssignLicenseFlag` | `boolean` | Required | This flag, when set to true, will assign a FOTA license automatically if the device does not have one already. |
| `autoAddDevicesFlag` | `boolean` | Required | this flag, when set to true, will automatically add a device of the same make and model to a campaign. |

## Example

```ts
import { CampaignFirmwareUpgrade } from 'verizonlib';

const campaignFirmwareUpgrade: CampaignFirmwareUpgrade = {
  firmwareName: 'SEQUANSCommunications_GM01Q_SR1.2.0.0-10512_SR1.2.0.0-10657',
  firmwareFrom: 'SR1.2.0.0-10512',
  firmwareTo: 'SR1.2.0.0-10657',
  protocol: 'LWM2M',
  startDate: '2021-09-29',
  endDate: '2021-10-01',
  deviceList: [
    '15-digit IMEI'
  ],
  autoAssignLicenseFlag: false,
  autoAddDevicesFlag: false,
  campaignName: 'Smart FOTA - test 4',
  campaignTimeWindowList: [
    {
      startTime: 18,
      endTime: 22,
    }
  ],
};
```

