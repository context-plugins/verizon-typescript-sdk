
# Device List Query Item

The list of devices in the account.

## Structure

`DeviceListQueryItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string \| undefined` | Optional | Device IMEI. |
| `mdn` | `string \| undefined` | Optional | The MDN (phone number) of the device. |
| `model` | `string \| undefined` | Optional | The device model name. |
| `make` | `string \| undefined` | Optional | The device make. |
| `firmware` | `string \| undefined` | Optional | The name of the firmware image currently installed on the device. |
| `fotaEligible` | `boolean \| undefined` | Optional | True if the device firmware can be upgraded over the air using the Software Management Services API. |
| `licenseAssigned` | `boolean \| undefined` | Optional | True if an MRC license has been assigned to this device. |
| `upgradeTime` | `string \| undefined` | Optional | The date and time that the device firmware was last upgraded. If a device has never been upgraded, the upgradeTime will be 01/01/1900 0:0:0. |

## Example

```ts
import { DeviceListQueryItem } from 'verizonlib';

const deviceListQueryItem: DeviceListQueryItem = {
  deviceId: '900000000000001',
  mdn: '0000040881',
  model: 'Model-A',
  make: 'Verizon',
  firmware: 'VerizonFirmwareVersion-01',
  fotaEligible: true,
  licenseAssigned: true,
  upgradeTime: '2021-06-03 00:03:56.079 +0000 UTC',
};
```

