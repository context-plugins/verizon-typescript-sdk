
# Location

Device location information.

## Structure

`Location`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `msid` | `string \| undefined` | Optional | MDN. |
| `pd` | [`PositionData \| undefined`](../../doc/models/position-data.md) | Optional | Position data. |
| `error` | [`PositionError \| undefined`](../../doc/models/position-error.md) | Optional | Position error. |

## Example

```ts
import { Location } from 'verizonlib';

const location: Location = {
  msid: '7892345678',
  pd: {
    time: '20170520004421',
    utcoffset: 'utcoffset2',
    x: '33.45324',
    y: '-84.59621',
    radius: '5571',
    qos: false,
  },
  error: {
    time: 'time4',
    utcoffset: 'utcoffset4',
    type: 'type6',
    info: 'info4',
  },
};
```

