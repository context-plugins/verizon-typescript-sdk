
# Region Intersection Pair

Specific region and intersection identification pair

## Structure

`RegionIntersectionPair`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `regionId` | `number \| undefined` | Optional | The region identifier code (0-65535)<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 65535` |
| `intersectionId` | `number` | Required | The intersection identifier code (0-65535)<br><br>**Constraints**: `>= 0`, `<= 65535` |

## Example

```ts
import { RegionIntersectionPair } from 'verizonlib';

const regionIntersectionPair: RegionIntersectionPair = {
  intersectionId: 5233,
  regionId: 100,
};
```

