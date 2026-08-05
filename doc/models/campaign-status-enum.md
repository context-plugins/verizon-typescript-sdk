
# Campaign Status Enum

Current status of the campaign.

## Enumeration

`CampaignStatusEnum`

## Fields

| Name |
|  --- |
| `CampaignRequestPending` |
| `CampaignRequestFailed` |
| `CampaignRequestQueued` |
| `CampaignCancelled` |
| `CampaignAborted` |
| `CampaignFailed` |
| `CampaignScheduled` |
| `CampaignEnded` |

## Example

```ts
import { CampaignStatusEnum } from 'verizonlib';

const campaignStatus = CampaignStatusEnum.CampaignScheduled;
```

