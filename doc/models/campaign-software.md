
# Campaign Software

Software upgrade information.

## Structure

`CampaignSoftware`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | Upgrade identifier. |
| `accountName` | `string` | Required | Account identifier. |
| `campaignName` | `string \| undefined` | Optional | Campaign name. |
| `softwareName` | `string` | Required | Software name. |
| `distributionType` | `string` | Required | LWM2M, OMD-DM or HTTP. |
| `make` | `string` | Required | Applicable make. |
| `model` | `string` | Required | Applicable model. |
| `softwareFrom` | `string` | Required | Old software name. |
| `softwareTo` | `string` | Required | New software name. |
| `startDate` | `string` | Required | Campaign start date. |
| `endDate` | `string` | Required | Campaign end date. |
| `downloadAfterDate` | `string \| undefined` | Optional | Specifies starting date client should download package. If null, client will download as soon as possible. |
| `downloadTimeWindowList` | [`V2TimeWindow[] \| undefined`](../../doc/models/v2-time-window.md) | Optional | List of allowed download time windows. |
| `installAfterDate` | `string \| undefined` | Optional | Client will install package after date. If null, client will install as soon as possible. |
| `installTimeWindowList` | [`V2TimeWindow[] \| undefined`](../../doc/models/v2-time-window.md) | Optional | List of allowed install time windows. |
| `status` | `string` | Required | Software upgrade status. |

## Example

```ts
import { CampaignSoftware } from 'verizonlib';

const campaignSoftware: CampaignSoftware = {
  id: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
  accountName: '0402196254-00001',
  softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
  distributionType: 'HTTP',
  make: 'Verizon',
  model: 'Model-A',
  softwareFrom: 'FOTA_Verizon_Model-A_00To01_HF',
  softwareTo: 'FOTA_Verizon_Model-A_02To03_HF',
  startDate: '2020-08-21',
  endDate: '2020-08-22',
  status: 'CampaignRequestPending',
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

