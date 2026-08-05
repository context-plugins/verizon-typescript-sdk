
# Campaign Software Upgrade

Software upgrade information.

## Structure

`CampaignSoftwareUpgrade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignName` | `string \| undefined` | Optional | Campaign name. |
| `softwareName` | `string` | Required | Software name to upgrade to. |
| `softwareFrom` | `string` | Required | Old software name. |
| `softwareTo` | `string` | Required | New software name. |
| `distributionType` | `string` | Required | OMA or HTTP. |
| `startDate` | `string` | Required | Campaign start date. |
| `endDate` | `string` | Required | Campaign end date. |
| `downloadAfterDate` | `string \| undefined` | Optional | Specifies starting date client should download package. If null, client will download as soon as possible. |
| `downloadTimeWindowList` | [`V2TimeWindow[] \| undefined`](../../doc/models/v2-time-window.md) | Optional | List of allowed download time windows. |
| `installAfterDate` | `string \| undefined` | Optional | Client will install package after date. If null, client will install as soon as possible. |
| `installTimeWindowList` | [`V2TimeWindow[] \| undefined`](../../doc/models/v2-time-window.md) | Optional | List of allowed install time windows. |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { CampaignSoftwareUpgrade } from 'verizonlib';

const campaignSoftwareUpgrade: CampaignSoftwareUpgrade = {
  softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
  softwareFrom: 'FOTA_Verizon_Model-A_00To01_HF',
  softwareTo: 'FOTA_Verizon_Model-A_02To03_HF',
  distributionType: 'HTTP',
  startDate: '2020-08-21',
  endDate: '2020-08-22',
  deviceList: [
    '990013907835573',
    '990013907884259'
  ],
  campaignName: 'FOTA_Verizon_Upgrade',
  downloadAfterDate: '2020-08-21',
  downloadTimeWindowList: [
    {
      startTime: 20,
      endTime: 21,
    }
  ],
  installAfterDate: '2020-08-21',
  installTimeWindowList: [
    {
      startTime: 22,
      endTime: 23,
    }
  ],
};
```

