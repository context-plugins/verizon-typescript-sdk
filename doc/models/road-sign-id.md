
# Road Sign ID

It provide a precise location of one or more roadside signs.

## Structure

`RoadSignID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `position` | [`RoadSignPosition`](../../doc/models/road-sign-position.md) | Required | Precise location of a road sign in the WGS-84 coordinate system, from which short offsets may be used to create additional data using a flat earth projection centered on this location. |
| `viewAngle` | `string` | Required | OctetStrings are described as hexadecimal strings, where each octet is represented by two hexadecimal characters.<br><br>**Constraints**: *Pattern*: `^[0-9A-Fa-f]{4}$` |

## Example

```ts
import { RoadSignID } from 'verizonlib';

const roadSignID: RoadSignID = {
  position: {
    lat: 14,
    mLong: 172,
  },
  viewAngle: '1101',
};
```

