
# V3 Add or Remove Device Result

Add or remove devices to existing upgrade information.

## Structure

`V3AddOrRemoveDeviceResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `campaignId` | `string` | Required | Campaign identifier. |
| `deviceList` | [`V3DeviceListItem[]`](../../doc/models/v3-device-list-item.md) | Required | Array of devices changed. |

## Example

```ts
import { V3AddOrRemoveDeviceResult } from 'verizonlib';

const v3AddOrRemoveDeviceResult: V3AddOrRemoveDeviceResult = {
  accountName: '0000123456-00001',
  campaignId: 'f858b8c4-2153-11ec-8c44-aeb16d1aa652',
  deviceList: [
    {
      deviceId: '15-digit IMEI',
      status: 'AddDeviceSucceed',
      reason: 'Device added Successfully',
    }
  ],
};
```

