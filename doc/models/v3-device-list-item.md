
# V3 Device List Item

Device changed.

## Structure

`V3DeviceListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | Device IMEI. |
| `status` | `string \| undefined` | Optional | Success or failure. |
| `reason` | `string \| undefined` | Optional | Result reason. |

## Example

```ts
import { V3DeviceListItem } from 'verizonlib';

const v3DeviceListItem: V3DeviceListItem = {
  deviceId: '15-digit IMEI',
  status: 'AddDeviceSucceed',
  reason: 'Device added Successfully',
};
```

