
# Upload and Schedule File Request

## Structure

`UploadAndScheduleFileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignName` | `string \| undefined` | Optional | The campaign name. |
| `fileName` | `string \| undefined` | Optional | The name of the file you are upgrading to. |
| `fileVersion` | `string \| undefined` | Optional | The version of the file you are upgrading to. |
| `distributionType` | `string \| undefined` | Optional | Valid values |
| `startDate` | `string \| undefined` | Optional | Campaign start date. |
| `endDate` | `string \| undefined` | Optional | Campaign end date. |
| `downloadAfterDate` | `string \| undefined` | Optional | Specifies the starting date the client should download the package. If null, client downloads as soon as possible. |
| `downloadTimeWindowList` | [`DownloadTimeWindow[] \| undefined`](../../doc/models/download-time-window.md) | Optional | List of allowed download time windows. |
| `installAfterDate` | `string \| undefined` | Optional | The date after which you install the package. If null, install as soon as possible. |
| `installTimeWindowList` | [`DownloadTimeWindow[] \| undefined`](../../doc/models/download-time-window.md) | Optional | List of allowed install time windows. |
| `deviceList` | `string[] \| undefined` | Optional | Device IMEI list. |

## Example

```ts
import { UploadAndScheduleFileRequest } from 'verizonlib';

const uploadAndScheduleFileRequest: UploadAndScheduleFileRequest = {
  campaignName: 'FOTA_Verizon_Upgrade',
  fileName: 'configfile-Verizon_VZW1_hello-world.txt',
  fileVersion: '1.0',
  distributionType: 'HTTP',
  startDate: '2021-02-08',
  endDate: '2021-02-08',
  downloadAfterDate: '2021-02-08',
};
```

