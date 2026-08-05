
# Get Wireless Coverage Request

Get wireless coverage.

## Structure

`GetWirelessCoverageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9-]{3,32}$` |
| `requestType` | `string` | Required | Type of request made. FWA for address qualification and NW for Nationwide coverage.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `12`, *Pattern*: `^[A-Za-z]{1,12}$` |
| `locationType` | `string` | Required | Type of location detail. |
| `locations` | [`Locationscoord`](../../doc/models/locationscoord.md) | Required | - |
| `networkTypesList` | [`NetworkTypeObject[]`](../../doc/models/network-type-object.md) | Required | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { GetWirelessCoverageRequest } from 'verizonlib';

const getWirelessCoverageRequest: GetWirelessCoverageRequest = {
  accountName: '0000123456-00001',
  requestType: 'NW',
  locationType: 'LONGLAT',
  locations: {
    coordinatesList: [
      {
        latitude: 'latitude6',
        longitude: 'longitude4',
      },
      {
        latitude: 'latitude6',
        longitude: 'longitude4',
      }
    ],
  },
  networkTypesList: [
    {
      networkType: 'LTE',
    }
  ],
};
```

