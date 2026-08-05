
# Session Report Request

Request for obtaining a session report.

## Structure

`SessionReportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The numeric ID of the account and must include leading zeroes. This value is indentical to `accountName`. |
| `imei` | `string` | Required | The International Mobile Equipment Identifier of the device. |
| `startDate` | `string \| undefined` | Optional | Start date of session to include. If not specified  information will be shown from the earliest available (180 days). Can be either date in ISO 8601 format or predefined constants. |
| `endDate` | `string \| undefined` | Optional | End date of session to include. If not specified  information will be shown to the latest available. Can be either date in ISO 8601 format or predefined constants. |
| `durationLow` | `number \| undefined` | Optional | Optional filter — minimum session duration |
| `durationHigh` | `number \| undefined` | Optional | Optional filter — maximum session duration |

## Example

```ts
import { SessionReportRequest } from 'verizonlib';

const sessionReportRequest: SessionReportRequest = {
  accountNumber: '0000123456-00001',
  imei: '15-digit IMEI',
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  durationLow: 0,
  durationHigh: 0,
};
```

