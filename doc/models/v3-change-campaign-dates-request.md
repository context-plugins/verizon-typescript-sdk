
# V3 Change Campaign Dates Request

Campaign dates and time windows.

## Structure

`V3ChangeCampaignDatesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startDate` | `string` | Required | Campaign start date. |
| `endDate` | `string` | Required | Campaign end date. |
| `campaignTimeWindowList` | [`V3TimeWindow[] \| undefined`](../../doc/models/v3-time-window.md) | Optional | List of allowed campaign time windows. |

## Example

```ts
import { V3ChangeCampaignDatesRequest } from 'verizonlib';

const v3ChangeCampaignDatesRequest: V3ChangeCampaignDatesRequest = {
  startDate: '2022-02-23',
  endDate: '2022-02-24',
  campaignTimeWindowList: [
    {
      startTime: 14,
      endTime: 18,
    }
  ],
};
```

