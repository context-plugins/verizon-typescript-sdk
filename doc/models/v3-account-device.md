
# V3 Account Device

Device information.

## Structure

`V3AccountDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device identifier. |
| `mdn` | `string` | Required | MDN. |
| `model` | `string` | Required | Device model. |
| `make` | `string` | Required | Device make. |
| `firmware` | `string` | Required | Device firmware version. |
| `fotaEligible` | `boolean` | Required | Value=true if the device software can be upgraded over the air using the Software Management Services API. |
| `status` | `string` | Required | Device status. |
| `licenseAssigned` | `boolean` | Required | License assigned device. |
| `protocol` | `string` | Required | Firmware protocol. Valid values include: LWM2M, OMADM, HTTP or NONE. |
| `softwareList` | [`V3SoftwareInfo[]`](../../doc/models/v3-software-info.md) | Required | List of sofware. |
| `fileList` | [`V3SoftwareInfo[] \| undefined`](../../doc/models/v3-software-info.md) | Optional | List of files. |
| `createTime` | `string \| undefined` | Optional | The date and time of when the device is created. |
| `upgradeTime` | `string \| undefined` | Optional | The date and time of when the device firmware or software is updated. |
| `updateTime` | `string \| undefined` | Optional | The date and time of when the device is updated. |
| `refreshTime` | `string \| undefined` | Optional | The date and time of when the device is refreshed. |

## Example

```ts
import { V3AccountDevice } from 'verizonlib';

const v3AccountDevice: V3AccountDevice = {
  deviceId: '15-digit device ID',
  mdn: '10-digit MDN',
  model: 'BG96',
  make: 'QUECTEL',
  firmware: 'BG96MAR04A04M1G',
  fotaEligible: false,
  status: 'Active',
  licenseAssigned: true,
  protocol: 'LWM2M',
  softwareList: [
    {
      name: 'VZ_MDM_IOT',
      version: '0.14',
      upgradeTime: '2012-04-23T18:25:43.511Z',
    }
  ],
  fileList: [
    {
      name: 'VZ_MDM_IOT',
      version: '0.14',
      upgradeTime: '2012-04-23T18:25:43.511Z',
    }
  ],
  createTime: '2021-06-03 00:03:56.079 +0000 UTC',
  upgradeTime: '2021-06-03 00:03:56.079 +0000 UTC',
  updateTime: '2021-06-03 00:03:56.079 +0000 UTC',
  refreshTime: '2021-06-03 00:03:56.079 +0000 UTC',
};
```

