
# Schedules Software Upgrade Request

## Structure

`SchedulesSoftwareUpgradeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `campaignName` | `string \| undefined` | Optional | The campaign name. |
| `softwareName` | `string \| undefined` | Optional | Software name. |
| `softwareFrom` | `string \| undefined` | Optional | Old software name. |
| `softwareTo` | `string \| undefined` | Optional | New software name. |
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
import { SchedulesSoftwareUpgradeRequest } from 'verizonlib';

const schedulesSoftwareUpgradeRequest: SchedulesSoftwareUpgradeRequest = {
  campaignName: 'FOTA_Verizon_Upgrade',
  softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
  softwareFrom: 'FOTA_Verizon_Model-A_00To01_HF',
  softwareTo: 'FOTA_Verizon_Model-A_02To03_HF',
  distributionType: 'HTTP',
  startDate: '2021-02-08',
  endDate: '2021-02-08',
  downloadAfterDate: '2021-02-08',
};
```

