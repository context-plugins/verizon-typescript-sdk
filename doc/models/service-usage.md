
# Service Usage

## Structure

`ServiceUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier. |
| `transactionsCount` | `string \| undefined` | Optional | Total requests for the account during the reporting period. |

## Example

```ts
import { ServiceUsage } from 'verizonlib';

const serviceUsage: ServiceUsage = {
  accountName: '3333355555-00001',
  transactionsCount: '200',
};
```

