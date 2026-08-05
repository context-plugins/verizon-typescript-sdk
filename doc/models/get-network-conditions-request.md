
# Get Network Conditions Request

Get network conditions.

## Structure

`GetNetworkConditionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9-]{3,32}$` |
| `locationType` | `string` | Required | Type of location detail. |
| `coordinates` | [`Coordinates`](../../doc/models/coordinates.md) | Required | Coordinates information. |

## Example

```ts
import { GetNetworkConditionsRequest } from 'verizonlib';

const getNetworkConditionsRequest: GetNetworkConditionsRequest = {
  accountName: '0000123456-00001',
  locationType: 'LONGLAT',
  coordinates: {
    latitude: '-33.84819',
    longitude: '151.22049',
  },
};
```

