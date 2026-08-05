
# Assign License Request

Request to assign license.

## Structure

`AssignLicenseRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of a billing account.This parameter is required only if the UWS account used for the current API session has access to multiple accounts. An account name is usually numeric, and must include any leading zeros.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32` |
| `devices` | [`LicenseDeviceList[] \| undefined`](../../doc/models/license-device-list.md) | Optional | A list of 4G devices.<br><br>**Constraints**: *Maximum Items*: `100` |
| `skuNumber` | `string \| undefined` | Optional | The Stock Keeping Unit (SKU). Valid skuNumbers for license types: “SIMSec-IoT-Lt”. (Lifetime) Once a license is assigned to a SIM, the SIM-Secure feature is enabled for the life of the SIM.“TS-BUNDLE-KTO-SIMSEC-MRC”. (Bundle) The SIM-Secure Flex license can be assigned to or removed from a SIM at any time. This SKU is bundled with other ThingSpace Services.“SIMSec-IoT”. (Flex) The SIM-Secure Flex license can be assigned to or removed from a SIM at any time. This SKU is purchased a la carte.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32` |

## Example

```ts
import { AssignLicenseRequest } from 'verizonlib';

const assignLicenseRequest: AssignLicenseRequest = {
  accountName: '0000123456-00001',
  devices: [
    {
      deviceIds: [
        {
          id: '864508030109877',
          kind: 'IMEI',
        }
      ],
      ipaddress: 'ipAddress4',
    }
  ],
  skuNumber: 'SIMSec-IoT-Lt',
};
```

