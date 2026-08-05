
# Geographical Path Description

This data frame can describe a complex path of arbitrary size using node offset method (LL offsets).

## Structure

`GeographicalPathDescription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `path` | [`OffsetSystem`](../../doc/models/offset-system.md) | Required | The OffsetSystem data frame selects a sequence of node offsets described in the Lat-Long offset method. |

## Example

```ts
import { GeographicalPathDescription } from 'verizonlib';

const geographicalPathDescription: GeographicalPathDescription = {
  path: {
    offset: {
      ll: {
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
      },
    },
  },
};
```

