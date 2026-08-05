
# Aggregate Session Report Request

Request for getting an aggregated session report.

## Structure

`AggregateSessionReportRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The numeric ID of the account and must include leading zeroes. This value is indentical to `accountName`. |
| `startDate` | `string \| undefined` | Optional | Start date of session to include. If not specified  information will be shown from the earliest available (180 days). Can be either date in ISO 8601 format or predefined constants. |
| `endDate` | `string \| undefined` | Optional | End date of session to include. If not specified  information will be shown to the latest available. Can be either date in ISO 8601 format or predefined constants. |
| `imei` | `string[]` | Required | Devices for which return usage info. Could be 0, 1 or more. In case of 0 will return all devices belonging to customer (except of filtered by other parameters). |
| `deviceGroup` | `string \| undefined` | Optional | Optional filter — only include devices matching this device group name. |
| `dataPlan` | `string \| undefined` | Optional | Optional filter — only include devices matching this carrier rate plan code. |
| `noSessionFlag` | `boolean \| undefined` | Optional | Optional filter — when "true", returns only devices with no sessions. |

## Example

```ts
import { AggregateSessionReportRequest } from 'verizonlib';

const aggregateSessionReportRequest: AggregateSessionReportRequest = {
  accountNumber: '0000123456-00001',
  imei: [
    '15-digit IMEI'
  ],
  startDate: '2022-12-09T22:01:06.217Z',
  endDate: '2022-12-09T22:01:08.734Z',
  deviceGroup: 'string',
  dataPlan: 'string',
  noSessionFlag: false,
};
```

