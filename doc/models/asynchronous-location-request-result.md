
# Asynchronous Location Request Result

## Structure

`AsynchronousLocationRequestResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txid` | `string \| undefined` | Optional | The transaction ID of the report. |
| `status` | [`ReportStatusEnum \| undefined`](../../doc/models/report-status-enum.md) | Optional | Status of the report. |
| `estimatedDuration` | `string \| undefined` | Optional | Estimated number of minutes required to complete the report. |

## Example

```ts
import {
  AsynchronousLocationRequestResult,
  ReportStatusEnum,
} from 'verizonlib';

const asynchronousLocationRequestResult: AsynchronousLocationRequestResult = {
  txid: '2017-12-11Te8b47da2-eeee-ffff-gggg-61815e1e97e9',
  status: ReportStatusEnum.QUEUED,
  estimatedDuration: 'estimatedDuration6',
};
```

