
# Location Report Status

Status of the report.

## Structure

`LocationReportStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txid` | `string \| undefined` | Optional | The transaction ID of the report. |
| `status` | [`ReportStatusEnum \| undefined`](../../doc/models/report-status-enum.md) | Optional | Status of the report. |

## Example

```ts
import { LocationReportStatus, ReportStatusEnum } from 'verizonlib';

const locationReportStatus: LocationReportStatus = {
  txid: '2c90bd28-eeee-ffff-gggg-7e3bd4fbff33',
  status: ReportStatusEnum.QUEUED,
};
```

