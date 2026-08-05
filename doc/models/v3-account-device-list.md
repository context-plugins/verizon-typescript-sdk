
# V3 Account Device List

Array of devices.

## Structure

`V3AccountDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `hasMoreData` | `boolean` | Required | Has more device flag? |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Last seen device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V3AccountDevice[]`](../../doc/models/v3-account-device.md) | Required | Account device list. |

## Example

```ts
import { V3AccountDeviceList } from 'verizonlib';

const v3AccountDeviceList: V3AccountDeviceList = {
  accountName: '0000123456-00001',
  hasMoreData: true,
  maxPageSize: 1000,
  deviceList: [
    {
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
    }
  ],
  lastSeenDeviceId: '15-digit IMEI',
};
```

