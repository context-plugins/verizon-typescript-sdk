
# V3 Device

Device information.

## Structure

`V3Device`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device IMEI. |
| `requestStatus` | `string \| undefined` | Optional | Success or failure. |
| `resultReason` | `string \| undefined` | Optional | - |
| `mdn` | `string \| undefined` | Optional | MDN. |
| `model` | `string \| undefined` | Optional | Device model. |
| `make` | `string \| undefined` | Optional | Device make. |
| `firmware` | `string \| undefined` | Optional | Device firmware version. |
| `fotaEligible` | `boolean \| undefined` | Optional | Value=true if the device software can be upgraded over the air using the Software Management Services API. |
| `status` | `string \| undefined` | Optional | Device status. |
| `licenseAssigned` | `boolean \| undefined` | Optional | License assigned device. |
| `protocol` | `string \| undefined` | Optional | Firmware protocol. Valid values include: LWM2M, OMADM, HTTP or NONE. |
| `softwareList` | [`V3SoftwareInfo[] \| undefined`](../../doc/models/v3-software-info.md) | Optional | List of sofware.<br><br>**Constraints**: *Maximum Items*: `1000` |
| `fileList` | [`V3SoftwareInfo[] \| undefined`](../../doc/models/v3-software-info.md) | Optional | List of files.<br><br>**Constraints**: *Maximum Items*: `1000` |
| `createTime` | `string \| undefined` | Optional | The date and time of when the device is created. |
| `statusTime` | `string \| undefined` | Optional | The date and time of when the device firmware or software is updated. |
| `updateTime` | `string \| undefined` | Optional | The date and time of when the device is updated. |
| `refreshTime` | `string \| undefined` | Optional | The date and time of when the device is refreshed. |
| `lastConnectionTime` | `string \| undefined` | Optional | The date and time of when the device reachability is checked. |

## Example

```ts
import { V3Device } from 'verizonlib';

const v3Device: V3Device = {
  deviceId: '15-digit IMEI',
  requestStatus: 'requestStatus4',
  resultReason: 'resultReason4',
  mdn: '10-digit MDN',
  model: 'GM01Q',
  make: 'SEQUANS COMMUNICATIONS',
  firmware: 'SR1.2.0.0-10657',
  fotaEligible: true,
  status: 'Active',
  licenseAssigned: true,
  protocol: 'LWM2M',
  createTime: '2021-06-03 00:03:56.079 +0000 UTC',
  statusTime: '2021-06-03 00:03:56.079 +0000 UTC',
  refreshTime: '2021-06-03 00:03:56.079 +0000 UTC',
  lastConnectionTime: '2012-04-23T18:25:43.511Z',
};
```

