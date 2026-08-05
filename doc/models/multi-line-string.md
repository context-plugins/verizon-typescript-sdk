
# Multi Line String

A MultiLineString is a type of geometry that represents a collection of LineString geometries.

## Structure

`MultiLineString`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type4Enum`](../../doc/models/type-4-enum.md) | Required | - |
| `coordinates` | `number[]` | Required | **Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10`, `>= -180`, `<= 180` |

## Example

```ts
import { MultiLineString, Type4Enum } from 'verizonlib';

const multiLineString: MultiLineString = {
  type: Type4Enum.MultiLineString,
  coordinates: [
    System.Object[]
  ],
};
```

