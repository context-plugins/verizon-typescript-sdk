
# V3 License Device

Device IMEI.

## Structure

`V3LicenseDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `assignmentTime` | `string \| undefined` | Optional | License assignment time. |

## Example

```ts
import { V3LicenseDevice } from 'verizonlib';

const v3LicenseDevice: V3LicenseDevice = {
  deviceId: '15-digit IMEI',
  assignmentTime: '2017-11-29 20:15:42.738 +0000 UTC',
};
```

