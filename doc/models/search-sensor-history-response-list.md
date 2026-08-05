
# Search Sensor History Response List

A success response includes an array of all matching events.

## Structure

`SearchSensorHistoryResponseList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `searchSensorHistory` | [`SearchDeviceResponse[] \| undefined`](../../doc/models/search-device-response.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { SearchSensorHistoryResponseList } from 'verizonlib';

const searchSensorHistoryResponseList: SearchSensorHistoryResponseList = {
  searchSensorHistory: [
    {
      action: 'action6',
      createdon: 'createdon6',
      deviceid: 'deviceid6',
      fields: {
        temperature: 'temperature0',
      },
      id: 'id6',
    },
    {
      action: 'action6',
      createdon: 'createdon6',
      deviceid: 'deviceid6',
      fields: {
        temperature: 'temperature0',
      },
      id: 'id6',
    },
    {
      action: 'action6',
      createdon: 'createdon6',
      deviceid: 'deviceid6',
      fields: {
        temperature: 'temperature0',
      },
      id: 'id6',
    }
  ],
};
```

