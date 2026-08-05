
# Bill Usage Request

Bill usage request.

## Structure

`BillUsageRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier. |
| `startDate` | `string` | Required | Start date to search for billable usage, mm-dd-yyyy. |
| `endDate` | `string` | Required | End date to search for billable usage, mm-dd-yyyy. |
| `usageForAllAccounts` | `boolean \| undefined` | Optional | Request usage for single or multiple accounts. |

## Example

```ts
import { BillUsageRequest } from 'verizonlib';

const billUsageRequest: BillUsageRequest = {
  accountName: '1234567890-00001',
  startDate: '04-01-2018',
  endDate: '04-30-2018',
  usageForAllAccounts: true,
};
```

