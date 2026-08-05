
# GIO Device List

## Structure

`GIODeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`GIODeviceId[] \| undefined`](../../doc/models/gio-device-id.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { GIODeviceList } from 'verizonlib';

const gIODeviceList: GIODeviceList = {
  deviceIds: [
    {
      kind: 'kind8',
      id: 'id0',
    }
  ],
};
```

