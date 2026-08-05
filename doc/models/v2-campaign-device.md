
# V2 Campaign Device

List of devices in a campaign.

## Structure

`V2CampaignDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalDevice` | `number \| undefined` | Optional | Total device count. |
| `hasMoreData` | `boolean` | Required | Has more report flag. |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V2DeviceStatus[]`](../../doc/models/v2-device-status.md) | Required | List of devices with id in IMEI. |

## Example

```ts
import { V2CampaignDevice } from 'verizonlib';

const v2CampaignDevice: V2CampaignDevice = {
  hasMoreData: true,
  maxPageSize: 1000,
  deviceList: [
    {
      deviceId: '15-digit IMEI',
      status: 'UpgradeSuccess',
      resultReason: 'DownloadInstallSucceeded',
    },
    {
      deviceId: '15-digit IMEI',
      status: 'UpgradeSuccess',
      resultReason: 'DownloadInstallSucceeded',
    },
    {
      deviceId: '15-digit IMEI',
      status: 'UpgradeSuccess',
      resultReason: 'DownloadInstallSucceeded',
    }
  ],
  totalDevice: 1148,
  lastSeenDeviceId: '15-digit IMEI',
};
```

