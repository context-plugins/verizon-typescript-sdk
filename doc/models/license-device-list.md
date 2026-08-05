
# License Device List

List of all devices.

## Structure

`LicenseDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`LicenseDeviceId[] \| undefined`](../../doc/models/license-device-id.md) | Optional | For 4G devices, IMEI (decimal, up to 15 digits).<br><br>**Constraints**: *Maximum Items*: `100` |
| `ipaddress` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9].[0-9].[0-9].[0-9]{3,32}$` |

## Example

```ts
import { LicenseDeviceList } from 'verizonlib';

const licenseDeviceList: LicenseDeviceList = {
  deviceIds: [
    {
      id: '864508030109877',
      kind: 'IMEI',
    }
  ],
  ipaddress: 'ipAddress8',
};
```

