
# Ice

Indicates the surface of the roadway is ice.

## Structure

`Ice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type12Enum \| undefined`](../../doc/models/type-12-enum.md) | Optional | Indicates the type of ice. |

## Example

```ts
import { Ice, Type12Enum } from 'verizonlib';

const ice: Ice = {
  type: Type12Enum.Smooth,
};
```

