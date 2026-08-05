
# V2 License Device

Device IMEI list.

## Structure

`V2LicenseDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `assignmentTime` | `string \| undefined` | Optional | License assignment time. |

## Example

```ts
import { V2LicenseDevice } from 'verizonlib';

const v2LicenseDevice: V2LicenseDevice = {
  deviceId: '990003425730535',
  assignmentTime: '2017-11-29T16:03:42.000Z',
};
```

