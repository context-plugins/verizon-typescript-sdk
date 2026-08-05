
# Add Devices Result

Contains the device identifiers and a success or failure response for each device in the request.

## Structure

`AddDevicesResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`DeviceId[] \| undefined`](../../doc/models/device-id.md) | Optional | Identifiers for the device. |
| `response` | `string \| undefined` | Optional | The status message for the current device. This will be Success or Failed |

## Example

```ts
import { AddDevicesResult } from 'verizonlib';

const addDevicesResult: AddDevicesResult = {
  deviceIds: [
    {
      id: '20-digit ICCID',
      kind: 'iccid',
    }
  ],
  response: 'Success',
};
```

