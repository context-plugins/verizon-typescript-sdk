
# Portland Cement

Indicates the surface of the roadway is portland cement.

## Structure

`PortlandCement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type6Enum \| undefined`](../../doc/models/type-6-enum.md) | Optional | Indicates the type of portland cement.<br><br>**Default**: `Type6Enum.Traveled` |

## Example

```ts
import { PortlandCement, Type6Enum } from 'verizonlib';

const portlandCement: PortlandCement = {
  type: Type6Enum.Traveled,
};
```

