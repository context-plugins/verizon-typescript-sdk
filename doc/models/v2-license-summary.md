
# V2 License Summary

Summary of license assignment.

## Structure

`V2LicenseSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `totalLicense` | `number \| undefined` | Optional | Total FOTA license count. |
| `assignedLicenses` | `number` | Required | Assigned FOTA license count. |
| `hasMoreData` | `boolean` | Required | True if there are more devices to retrieve. |
| `lastSeenDeviceId` | `string \| undefined` | Optional | Last seen device identifier. |
| `maxPageSize` | `number` | Required | Maximum page size. |
| `deviceList` | [`V2LicenseDevice[] \| undefined`](../../doc/models/v2-license-device.md) | Optional | Device IMEI list. |

## Example

```ts
import { V2LicenseSummary } from 'verizonlib';

const v2LicenseSummary: V2LicenseSummary = {
  accountName: '0402196254-00001',
  assignedLicenses: 4319,
  hasMoreData: true,
  maxPageSize: 10,
  totalLicense: 5000,
  lastSeenDeviceId: '1000',
  deviceList: [
    {
      deviceId: '990003425730535',
      assignmentTime: '2017-11-29T16:03:42.000Z',
    },
    {
      deviceId: '990000473475989',
      assignmentTime: '2017-11-29T16:03:42.000Z',
    },
    {
      deviceId: '990000347475989',
      assignmentTime: '2017-11-29T16:03:42.000Z',
    },
    {
      deviceId: '990007303425535',
      assignmentTime: '2017-11-29T16:03:42.000Z',
    }
  ],
};
```

