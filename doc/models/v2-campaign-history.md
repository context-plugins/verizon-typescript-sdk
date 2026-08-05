
# V2 Campaign History

Campaign history details.

## Structure

`V2CampaignHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean` | Required | Has more report flag. |
| `lastSeenCampaignId` | `string \| undefined` | Optional | Campaign identifier. |
| `campaignList` | [`V2CampaignMetaInfo[] \| null`](../../doc/models/v2-campaign-meta-info.md) | Required | Software upgrade list. |

## Example

```ts
import { V2CampaignHistory } from 'verizonlib';

const v2CampaignHistory: V2CampaignHistory = {
  hasMoreData: true,
  campaignList: [
    {
      accountName: '0402196254-00001',
      id: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
      softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
      distributionType: 'HTTP',
      softwareFrom: 'FOTA_Verizon_Model-A_00To01_HF',
      softwareTo: 'FOTA_Verizon_Model-A_02To03_HF',
      make: 'Verizon',
      model: 'Model-A',
      startDate: '2020-08-21',
      endDate: '2020-08-22',
      status: 'CampaignEnded',
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
    }
  ],
  lastSeenCampaignId: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
};
```

