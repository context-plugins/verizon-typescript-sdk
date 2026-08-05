
# V3 Add or Remove Device Request

Devices to add or remove from existing software upgrade information.

## Structure

`V3AddOrRemoveDeviceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Operation either 'append' or 'remove' |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { V3AddOrRemoveDeviceRequest } from 'verizonlib';

const v3AddOrRemoveDeviceRequest: V3AddOrRemoveDeviceRequest = {
  type: 'remove',
  deviceList: [
    '15-digit IMEI'
  ],
};
```

