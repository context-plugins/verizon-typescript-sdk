
# Node List LL

The NodeListLL data structure provides the sequence of signed offset node point values for determining the latitude and longitude. Each LL point is referred to as a node point.

## Structure

`NodeListLL`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nodes` | [`NodeLL[]`](../../doc/models/node-ll.md) | Required | The NodeSetLL data frame consists of a list of NodeLL entries using LL offsets.<br><br>**Constraints**: *Minimum Items*: `2`, *Maximum Items*: `63` |

## Example

```ts
import { NodeListLL } from 'verizonlib';

const nodeListLL: NodeListLL = {
  nodes: [
    {
      delta: {
        nodeLatLon: {
          lon: 40,
          lat: 10,
        },
      },
    }
  ],
};
```

