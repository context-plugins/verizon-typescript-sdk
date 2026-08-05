
# V2 Add or Remove Device Request

Add or remove device to existing software upgrade information.

## Structure

`V2AddOrRemoveDeviceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Operation either 'append' or 'remove'. |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { V2AddOrRemoveDeviceRequest } from 'verizonlib';

const v2AddOrRemoveDeviceRequest: V2AddOrRemoveDeviceRequest = {
  type: 'remove',
  deviceList: [
    '990013907884259',
    '990013907835573',
    '990013907833575'
  ],
};
```

