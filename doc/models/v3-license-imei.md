
# V3 License IMEI

List of devices.

## Structure

`V3LicenseIMEI`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceList` | `string[]` | Required | Device IMEI list. |

## Example

```ts
import { V3LicenseIMEI } from 'verizonlib';

const v3LicenseIMEI: V3LicenseIMEI = {
  deviceList: [
    '15-digit IMEI',
    '15-digit IMEI'
  ],
};
```

