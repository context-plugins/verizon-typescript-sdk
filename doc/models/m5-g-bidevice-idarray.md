
# M5 G Bidevice Idarray

## Structure

`M5gBideviceIdarray`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`M5gBideviceIdarrayDeviceId[] \| undefined`](../../doc/models/containers/m5-g-bidevice-idarray-device-id.md) | Optional | This is Array of a container for any-of cases. |

## Example

```ts
import { M5gBideviceIdarray } from 'verizonlib';

const m5gBideviceIdarray: M5gBideviceIdarray = {
  deviceId: [
    {
      id: 'id0',
      kind: 'kind8',
    },
    {
      id: 'id0',
      kind: 'kind8',
    },
    {
      id: 'id0',
      kind: 'kind8',
    }
  ],
};
```

