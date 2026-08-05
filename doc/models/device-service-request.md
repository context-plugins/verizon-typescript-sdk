
# Device Service Request

Device information.

## Structure

`DeviceServiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string` | Required | The International Mobile Equipment Identifier of the device. |
| `bullseyeEnable` | [`HplBullseyeEnable`](../../doc/models/hpl-bullseye-enable.md) | Required | A flag that shows if Hyper Precise is enabled (true) or disabled (false). |

## Example

```ts
import { DeviceServiceRequest } from 'verizonlib';

const deviceServiceRequest: DeviceServiceRequest = {
  imei: '15-digit IMEI',
  bullseyeEnable: {
    bullseyeEnable: true,
  },
};
```

