
# V2 Account Device

Account device information.

## Structure

`V2AccountDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device identifier. |
| `mdn` | `string` | Required | MDN. |
| `model` | `string` | Required | Device model. |
| `make` | `string` | Required | Device make. |
| `fotaEligible` | `boolean` | Required | Device FOTA capable. |
| `appFotaEligible` | `boolean` | Required | Device application FOTA capable. |
| `licenseAssigned` | `boolean` | Required | License assigned device. |
| `distributionType` | `string` | Required | LWM2M, OMD-DM or HTTP. |
| `softwareList` | [`V2SoftwareInfo[]`](../../doc/models/v2-software-info.md) | Required | List of sofware. |
| `createTime` | `string \| undefined` | Optional | The date and time of when the device is created. |
| `upgradeTime` | `string \| undefined` | Optional | The date and time of when the device firmware or software is upgraded. |
| `updateTime` | `string \| undefined` | Optional | The date and time of when the device is updated. |
| `refreshTime` | `string \| undefined` | Optional | The date and time of when the device is refreshed. |

## Example

```ts
import { V2AccountDevice } from 'verizonlib';

const v2AccountDevice: V2AccountDevice = {
  deviceId: '15-digit IMEI',
  mdn: '10-digit MDN',
  model: 'Model-A',
  make: 'Verizon',
  fotaEligible: true,
  appFotaEligible: true,
  licenseAssigned: true,
  distributionType: 'HTTP',
  softwareList: [
    {
      name: 'FOTA_Verizon_Model-A_02To03_HF',
      version: '3',
      upgradeTime: '2020-09-08T19:00:51.541Z',
    }
  ],
  createTime: '2021-06-03 00:03:56.079 +0000 UTC',
  upgradeTime: '2021-06-03 00:03:56.079 +0000 UTC',
  updateTime: '2021-06-03 00:03:56.079 +0000 UTC',
  refreshTime: '2021-06-03 00:03:56.079 +0000 UTC',
};
```

