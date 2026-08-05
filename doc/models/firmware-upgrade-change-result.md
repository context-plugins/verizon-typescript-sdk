
# Firmware Upgrade Change Result

Upgrade information.

## Structure

`FirmwareUpgradeChangeResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier in "##########-#####". |
| `id` | `string \| undefined` | Optional | The unique identifier for this upgrade. |
| `deviceList` | [`V1DeviceListItem[] \| undefined`](../../doc/models/v1-device-list-item.md) | Optional | A JSON object for each device that was included in the request, showing the device IMEI, the status of the addition or removal, and additional information about the status. |

## Example

```ts
import { FirmwareUpgradeChangeResult } from 'verizonlib';

const firmwareUpgradeChangeResult: FirmwareUpgradeChangeResult = {
  accountName: '0000123456-00001',
  id: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
  deviceList: [
    {
      deviceId: '15-digit IMEI',
      status: 'AddDeviceSucceed',
      reason: 'Device added Successfully',
    },
    {
      deviceId: '15-digit IMEI',
      status: 'AddDeviceSucceed',
      reason: 'Device added Successfully',
    }
  ],
};
```

