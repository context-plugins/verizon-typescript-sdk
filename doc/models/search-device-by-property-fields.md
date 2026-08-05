
# Search Device by Property Fields

List of device sensors and their most recently reported values.

## Structure

`SearchDeviceByPropertyFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceleration` | [`Acceleration \| undefined`](../../doc/models/acceleration.md) | Optional | - |
| `battery` | `string \| undefined` | Optional | - |
| `humidity` | `string \| undefined` | Optional | - |
| `light` | `string \| undefined` | Optional | - |
| `pressure` | `string \| undefined` | Optional | - |
| `signalStrength` | `string \| undefined` | Optional | - |
| `temperature` | `string \| undefined` | Optional | - |
| `devicePropertylocation` | [`DevicePropertylocation \| undefined`](../../doc/models/device-propertylocation.md) | Optional | - |

## Example

```ts
import { SearchDeviceByPropertyFields } from 'verizonlib';

const searchDeviceByPropertyFields: SearchDeviceByPropertyFields = {
  acceleration: {
    x: 'x6',
    y: 'y4',
    z: 'z6',
  },
  battery: '95',
  humidity: '29',
  light: '150',
  pressure: '888',
  signalStrength: '-58',
  temperature: '19.2',
};
```

