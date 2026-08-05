
# Device List Result

Device list information.

## Structure

`DeviceListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `deviceCount` | `number` | Required | Total device count. |
| `deviceList` | [`V3Device[]`](../../doc/models/v3-device.md) | Required | List of devices with id in IMEI.<br><br>**Constraints**: *Maximum Items*: `1000` |

## Example

```ts
import { DeviceListResult } from 'verizonlib';

const deviceListResult: DeviceListResult = {
  accountName: '0000123456-00001',
  deviceCount: 1,
  deviceList: [
    {
      deviceId: '15-digit IMEI',
      requestStatus: 'requestStatus2',
      resultReason: 'resultReason2',
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
    }
  ],
};
```

