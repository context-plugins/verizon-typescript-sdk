
# Fields

List of fields affected by the event.

## Structure

`Fields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configuration` | [`MConfiguration \| undefined`](../../doc/models/m-configuration.md) | Optional | List of the field names and values to set. |

## Example

```ts
import { Fields } from 'verizonlib';

const fields: Fields = {
  configuration: {
    frequency: 'Low',
  },
};
```

