
# Geo Fence

The GeoJSON representation of geofence. Geofence supports the following geometry types: LineString, Polygon, MultiLineString, and MultiPolygon. The system only supports a single Feature in the FeatureCollection, so only one Line, Polygon, MultiLine or MultiPolygon can be defined within one Geofencing configuration.

## Structure

`GeoFence`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`TypeEnum`](../../doc/models/type-enum.md) | Required | - |
| `features` | [`FeatureItem[]`](../../doc/models/feature-item.md) | Required | **Constraints**: *Minimum Items*: `1`, *Maximum Items*: `1` |

## Example

```ts
import { GeoFence, Type1Enum, Type2Enum, TypeEnum } from 'verizonlib';

const geoFence: GeoFence = {
  type: TypeEnum.FeatureCollection,
  features: [
    {
      type: Type1Enum.Feature,
      geometry: {
        type: Type2Enum.LineString,
        coordinates: [
          51.5351.54,
          51.5351.54
        ],
      },
      properties: { 'key1': 'val1', 'key2': 'val2' },
    }
  ],
};
```

