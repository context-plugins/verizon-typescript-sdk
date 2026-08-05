
# Daily Usage Response

## Structure

`DailyUsageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean \| undefined` | Optional | A flag set to indicate if there is more than one page of data returned by the query (true) or if only one page of data returned (false) |
| `deviceId` | [`GIODeviceId \| undefined`](../../doc/models/gio-device-id.md) | Optional | - |
| `usageHistory` | [`DailyUsageHistory[] \| undefined`](../../doc/models/daily-usage-history.md) | Optional | - |

## Example

```ts
import { DailyUsageResponse } from 'verizonlib';

const dailyUsageResponse: DailyUsageResponse = {
  hasMoreData: false,
  deviceId: {
    kind: 'kind8',
    id: 'id0',
  },
  usageHistory: [
    {
      bytesUsed: 'bytesUsed2',
      extendedAttributes: [
        {
          key: 'key8',
          value: 'value0',
        },
        {
          key: 'key8',
          value: 'value0',
        },
        {
          key: 'key8',
          value: 'value0',
        }
      ],
      servicePlan: 'servicePlan0',
      smsUsed: 'smsUsed6',
      source: 'source4',
    },
    {
      bytesUsed: 'bytesUsed2',
      extendedAttributes: [
        {
          key: 'key8',
          value: 'value0',
        },
        {
          key: 'key8',
          value: 'value0',
        },
        {
          key: 'key8',
          value: 'value0',
        }
      ],
      servicePlan: 'servicePlan0',
      smsUsed: 'smsUsed6',
      source: 'source4',
    }
  ],
};
```

