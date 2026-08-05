
# Geographical Path

The data frame is used to support the cross-cutting need in many V2X messages to describe arbitrary spatial areas (polygons, boundary lines, and other basic shapes) required by various message types in a small message size.

## Structure

`GeographicalPath`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | [`GeographicalPathDescription \| undefined`](../../doc/models/geographical-path-description.md) | Optional | This data frame can describe a complex path of arbitrary size using node offset method (LL offsets). |
| `direction` | `string \| undefined` | Optional | OctetStrings are described as hexadecimal strings, where each octet is represented by two hexadecimal characters.<br><br>**Constraints**: *Pattern*: `^[0-9A-Fa-f]{4}$` |

## Example

```ts
import { GeographicalPath } from 'verizonlib';

const geographicalPath: GeographicalPath = {
  description: {
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
            },
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
  },
  direction: '1101',
};
```

