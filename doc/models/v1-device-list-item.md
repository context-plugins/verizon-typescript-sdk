
# V1 Device List Item

A JSON object for each device that was included in the request, showing the device IMEI, the status of the addition or removal, and additional information about the status.

## Structure

`V1DeviceListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | Device IMEI. |
| `status` | `string \| undefined` | Optional | Whether the device was successfully added or removed from the campaign. |
| `reason` | `string \| undefined` | Optional | Additional details about the status. |

## Example

```ts
import { V1DeviceListItem } from 'verizonlib';

const v1DeviceListItem: V1DeviceListItem = {
  deviceId: '900000000000001',
  status: 'LicenseAssignSuccess',
  reason: 'Success',
};
```

