
# Device List 2

## Structure

`DeviceList2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | [`DeviceList2Ids[] \| undefined`](../../doc/models/containers/device-list-2-ids.md) | Optional | This is Array of a container for any-of cases.<br><br>**Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { DeviceList2 } from 'verizonlib';

const deviceList2: DeviceList2 = {
  ids: [
    {
      id: 'id4',
      kind: 'kind2',
    }
  ],
};
```

