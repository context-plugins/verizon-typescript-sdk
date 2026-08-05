
# Resource Resource Query

## Structure

`ResourceResourceQuery`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filter` | [`Devicepropertyfilter \| undefined`](../../doc/models/devicepropertyfilter.md) | Optional | - |

## Example

```ts
import { ResourceResourceQuery } from 'verizonlib';

const resourceResourceQuery: ResourceResourceQuery = {
  filter: {
    selection: {
      modelid: 'modelid0',
    },
    querytotalcount: false,
  },
};
```

