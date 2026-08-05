
# V3 License Summary

Information for FOTA licenses assigned to devices.

## Structure

`V3LicenseSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `totalLicenses` | `number \| undefined` | Optional | Total FOTA license count. |
| `assignedLicenses` | `number` | Required | Assigned FOTA license count. |
| `hasMoreData` | `boolean` | Required | True if there are more devices to retrieve. |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Last seen device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V3LicenseDevice[] \| undefined`](../../doc/models/v3-license-device.md) | Optional | Device IMEI list. |

## Example

```ts
import { V3LicenseSummary } from 'verizonlib';

const v3LicenseSummary: V3LicenseSummary = {
  accountName: '0000123456-00001',
  assignedLicenses: 4319,
  hasMoreData: true,
  maxPageSize: 1000,
  totalLicenses: 5000,
  lastSeenDeviceId: '1000',
  deviceList: [
    {
      deviceId: '15-digit IMEI',
      assignmentTime: '2017-11-29 20:15:42.738 +0000 UTC',
    },
    {
      deviceId: '15-digit IMEI',
      assignmentTime: '2017-11-29 20:15:42.738 +0000 UTC',
    }
  ],
};
```

