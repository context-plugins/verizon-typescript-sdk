
# Feature Item

## Structure

`FeatureItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type1Enum`](../../doc/models/type-1-enum.md) | Required | - |
| `geometry` | [`Geometry`](../../doc/models/containers/geometry.md) | Required | - |
| `properties` | `unknown` | Required | Properties object for a GeoJSON Feature (no additional properties allowed). |

## Example

```ts
import { FeatureItem, Type1Enum, Type2Enum } from 'verizonlib';

const featureItem: FeatureItem = {
  type: Type1Enum.Feature,
  geometry: {
    type: Type2Enum.LineString,
    coordinates: [
      51.5351.54,
      51.5351.54
    ],
  },
  properties: { 'key1': 'val1', 'key2': 'val2' },
};
```

