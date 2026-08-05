
# Get Wireless Coverage Request FWA

Get wireless coverage FWA.

## Structure

`GetWirelessCoverageRequestFWA`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9-]{3,32}$` |
| `requestType` | `string` | Required | Type of request made. FWA for address qualification and NW for Nationwide coverage.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `12`, *Pattern*: `^[A-Za-z]{1,12}$` |
| `locationType` | `string` | Required | Type of location detail.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `12`, *Pattern*: `^[A-Za-z]{3,12}$` |
| `locations` | [`Locations`](../../doc/models/locations.md) | Required | - |
| `networkTypesList` | [`NetworkTypeObject[]`](../../doc/models/network-type-object.md) | Required | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { GetWirelessCoverageRequestFWA } from 'verizonlib';

const getWirelessCoverageRequestFWA: GetWirelessCoverageRequestFWA = {
  accountName: '0000123456-00001',
  requestType: 'NW',
  locationType: 'ADDRESS',
  locations: {
    addressList: [
      {
        addressLine1: 'addressLine10',
        addressLine2: 'addressLine28',
        city: 'city8',
        state: 'state4',
        country: 'country2',
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

