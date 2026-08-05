
# Device IMEI

Device IMEI list.

## Structure

`DeviceIMEI`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { DeviceIMEI } from 'verizonlib';

const deviceIMEI: DeviceIMEI = {
  deviceList: [
    '15-digit IMEI'
  ],
};
```

