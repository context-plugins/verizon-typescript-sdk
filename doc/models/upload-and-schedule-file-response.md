
# Upload and Schedule File Response

## Structure

`UploadAndScheduleFileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Updgrade identifier. |
| `accountName` | `string \| undefined` | Optional | Account identifer. |
| `campaignName` | `string \| undefined` | Optional | The campaign name. |
| `softwareName` | `string \| undefined` | Optional | Software name. |
| `softwareFrom` | `string \| undefined` | Optional | Old software name. |
| `softwareTo` | `string \| undefined` | Optional | New software name. |
| `fileName` | `string \| undefined` | Optional | The name of the file you are upgrading to. |
| `fileVersion` | `string \| undefined` | Optional | The version of the file you are upgrading to. |
| `distributionType` | `string \| undefined` | Optional | Valid values |
| `make` | `string \| undefined` | Optional | Applicable make. |
| `model` | `string \| undefined` | Optional | Applicable model. |
| `startDate` | `string \| undefined` | Optional | Campaign start date. |
| `endDate` | `string \| undefined` | Optional | Campaign end date. |
| `downloadAfterDate` | `string \| undefined` | Optional | Specifies the starting date the client should download the package. If null, client downloads as soon as possible. |
| `downloadTimeWindowList` | [`DownloadTimeWindow[] \| undefined`](../../doc/models/download-time-window.md) | Optional | List of allowed download time windows. |
| `installAfterDate` | `string \| undefined` | Optional | The date after which you install the package. If null, install as soon as possible. |
| `installTimeWindowList` | [`DownloadTimeWindow[] \| undefined`](../../doc/models/download-time-window.md) | Optional | List of allowed install time windows. |
| `deviceList` | `string[] \| undefined` | Optional | Device IMEI list. |
| `status` | `string \| undefined` | Optional | Software update status. |

## Example

```ts
import { UploadAndScheduleFileResponse } from 'verizonlib';

const uploadAndScheduleFileResponse: UploadAndScheduleFileResponse = {
  id: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
  accountName: '0242078689-00001',
  campaignName: 'FOTA_Verizon_Upgrade',
  softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
  softwareFrom: 'FOTA_Verizon_Model-A_00To01_HF',
  softwareTo: 'FOTA_Verizon_Model-A_02To03_HF',
  fileName: 'configfile-Verizon_VZW1_hello-world.txt',
  fileVersion: '1.0',
  distributionType: 'HTTP',
  make: 'Verizon',
  model: 'Model-A',
  startDate: '2021-02-08',
  endDate: '2021-02-08',
  downloadAfterDate: '2021-02-08',
  status: 'pending',
};
```

