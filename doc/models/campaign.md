
# Campaign

Firmware upgrade information.

## Structure

`Campaign`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Upgrade identifier. |
| `accountName` | `string` | Required | Account identifier. |
| `campaignName` | `string \| undefined` | Optional | Campaign name. |
| `firmwareName` | `string \| undefined` | Optional | Name of firmware. |
| `firmwareFrom` | `string \| undefined` | Optional | Old firmware version. |
| `firmwareTo` | `string \| undefined` | Optional | New firmware version. |
| `protocol` | `string` | Required | The protocol of the firmware distribution. Default: LWM2M.<br><br>**Default**: `'LWM2M'` |
| `make` | `string` | Required | Applicable make. |
| `model` | `string` | Required | Applicable model. |
| `startDate` | `string` | Required | Campaign start date. |
| `endDate` | `string` | Required | Campaign end date. |
| `campaignTimeWindowList` | [`V3TimeWindow[] \| undefined`](../../doc/models/v3-time-window.md) | Optional | List of allowed campaign time windows. |
| `status` | `string` | Required | Firmware upgrade status. |
| `autoAssignLicenseFlag` | `boolean` | Required | Any device included in the device list which does not have a license will automatically be assigned a FOTA license, assuming there are enough FOTA licenses available, when set to true. |
| `autoAddDevicesFlag` | `boolean` | Required | Beyond the devices included on the device list, any other device(s) which matches the eligibility criteria (same make, model, current firmware, protocol, billing account) will automatically be added to the campaign list during the life of the campaign when set to true. |

## Example

```ts
import { Campaign } from 'verizonlib';

const campaign: Campaign = {
  id: 'f858b8c4-2153-11ec-8c44-aeb16d1aa652',
  accountName: '0642233522-00001',
  protocol: 'LWM2M',
  make: 'SEQUANS Communications',
  model: 'GM01Q',
  startDate: '2021-09-29',
  endDate: '2021-10-01',
  status: 'CampaignPreScheduled',
  autoAssignLicenseFlag: false,
  autoAddDevicesFlag: false,
  campaignName: 'Smart FOTA - test 4',
  firmwareName: 'SEQUANSCommunications_GM01Q_SR1.2.0.0-10512_SR1.2.0.0-10657',
  firmwareFrom: 'SR1.2.0.0-10512',
  firmwareTo: 'SR1.2.0.0-10657',
  campaignTimeWindowList: [
    {
      startTime: 18,
      endTime: 22,
    }
  ],
};
```

