
# Device Status Itemforplanner

## Structure

`DeviceStatusItemforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceIdforplanner[] \| null \| undefined`](../../doc/models/device-idforplanner.md) | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `reason` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { DeviceStatusItemforplanner } from 'verizonlib';

const deviceStatusItemforplanner: DeviceStatusItemforplanner = {
  deviceIds: [
    {
      kind: 'kind8',
      id: 'id0',
    },
    {
      kind: 'kind8',
      id: 'id0',
    }
  ],
  status: 'status6',
  reason: 'reason0',
};
```

