
# Device List

## Structure

`DeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceId[] \| undefined`](../../doc/models/device-id.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { DeviceList } from 'verizonlib';

const deviceList: DeviceList = {
  deviceIds: [
    {
      id: 'id0',
      kind: 'kind8',
    }
  ],
};
```

