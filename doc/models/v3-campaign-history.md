
# V3 Campaign History

Campaign history.

## Structure

`V3CampaignHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean` | Required | Has more report flag? |
| `lastSeenCampaignId` | `string \| undefined` | Optional | Campaign identifier. |
| `campaignList` | [`V3CampaignMetaInfo[] \| null`](../../doc/models/v3-campaign-meta-info.md) | Required | Firmware upgrade list. |

## Example

```ts
import { CampaignMetaInfoProtocolEnum, V3CampaignHistory } from 'verizonlib';

const v3CampaignHistory: V3CampaignHistory = {
  hasMoreData: true,
  campaignList: [
    {
      accountName: '0000123456-00001',
      id: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
      make: 'Verizon',
      model: 'Model-A',
      startDate: '2020-08-21',
      endDate: '2020-08-22',
      status: 'CampaignEnded',
      campaignName: 'FOTA_Verizon_Upgrade',
      firmwareName: 'firmwareName6',
      firmwareFrom: 'firmwareFrom6',
      firmwareTo: 'firmwareTo6',
      protocol: CampaignMetaInfoProtocolEnum.LWM2m,
      campaignTimeWindowList: [
        {
          startTime: 20,
          endTime: 21,
        }
      ],
    }
  ],
  lastSeenCampaignId: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
};
```

