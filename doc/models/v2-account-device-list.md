
# V2 Account Device List

List of device information for an account.

## Structure

`V2AccountDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name. |
| `hasMoreData` | `boolean` | Required | Has more device flag? |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Last seen device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V2AccountDevice[]`](../../doc/models/v2-account-device.md) | Required | Account device list. |

## Example

```ts
import { V2AccountDeviceList } from 'verizonlib';

const v2AccountDeviceList: V2AccountDeviceList = {
  accountName: '0000123456-00001',
  hasMoreData: true,
  maxPageSize: 1000,
  deviceList: [
    {
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
    },
    {
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
    },
    {
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
    }
  ],
  lastSeenDeviceId: '15-digit IMEI',
};
```

