
# Search Device Event History Response List

A success response includes an array of all matching events.

## Structure

`SearchDeviceEventHistoryResponseList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `searchDeviceEventHistory` | [`SearchDeviceResponse[] \| undefined`](../../doc/models/search-device-response.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { SearchDeviceEventHistoryResponseList } from 'verizonlib';

const searchDeviceEventHistoryResponseList: SearchDeviceEventHistoryResponseList = {
  searchDeviceEventHistory: [
    {
      action: 'action4',
      createdon: 'createdon4',
      deviceid: 'deviceid8',
      fields: {
        temperature: 'temperature0',
      },
      id: 'id8',
    },
    {
      action: 'action4',
      createdon: 'createdon4',
      deviceid: 'deviceid8',
      fields: {
        temperature: 'temperature0',
      },
      id: 'id8',
    },
    {
      action: 'action4',
      createdon: 'createdon4',
      deviceid: 'deviceid8',
      fields: {
        temperature: 'temperature0',
      },
      id: 'id8',
    }
  ],
};
```

