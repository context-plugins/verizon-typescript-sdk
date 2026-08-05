
# Firmware Upgrade Change Request

List of devices to add or remove.

## Structure

`FirmwareUpgradeChangeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`FirmwareTypeListEnum`](../../doc/models/firmware-type-list-enum.md) | Required | Possible values are `append` or `remove` |
| `deviceList` | `string[]` | Required | The IMEIs of the devices. |

## Example

```ts
import {
  FirmwareTypeListEnum,
  FirmwareUpgradeChangeRequest,
} from 'verizonlib';

const firmwareUpgradeChangeRequest: FirmwareUpgradeChangeRequest = {
  type: FirmwareTypeListEnum.Append,
  deviceList: [
    '15-digit IMEI',
    '15-digit IMEI'
  ],
};
```

