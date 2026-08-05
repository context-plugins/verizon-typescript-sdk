
# Event Position

## Structure

`EventPosition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number` | Required | Latitude of the event location in microdegrees (900000001 shall be used when unavailable).<br><br>**Constraints**: `>= -900000000`, `<= 900000001` |
| `longitude` | `number` | Required | Longitude of the event location in microdegrees (1800000001 shall be used when unavailable).<br><br>**Constraints**: `>= -1800000000`, `<= 1800000001` |
| `positionConfidenceEllipse` | [`PosConfidenceEllipse`](../../doc/models/pos-confidence-ellipse.md) | Required | - |
| `altitude` | [`Altitude`](../../doc/models/altitude.md) | Required | - |

## Example

```ts
import { AltitudeConfidenceEnum, EventPosition } from 'verizonlib';

const eventPosition: EventPosition = {
  latitude: 198,
  longitude: 234,
  positionConfidenceEllipse: {
    semiMajorConfidence: 16,
    semiMinorConfidence: 114,
    semiMajorOrientation: 100,
  },
  altitude: {
    altitudeValue: 236,
    altitudeConfidence: AltitudeConfidenceEnum.Alt00001,
  },
};
```

