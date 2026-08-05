
# Usage History

## Structure

`UsageHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bytesUsed` | `number \| undefined` | Optional | - |
| `serviceplan` | `string \| undefined` | Optional | - |
| `smsUsed` | `number \| undefined` | Optional | - |
| `moSMS` | `number \| undefined` | Optional | - |
| `mtSMS` | `number \| undefined` | Optional | - |
| `source` | `string \| undefined` | Optional | - |
| `eventDateTime` | `string \| undefined` | Optional | - |

## Example

```ts
import { UsageHistory } from 'verizonlib';

const usageHistory: UsageHistory = {
  bytesUsed: 3072,
  serviceplan: 'The serviceplan name',
  smsUsed: 176,
  moSMS: 230,
  mtSMS: 18,
  source: 'Raw Usage',
  eventDateTime: '2021-08-15T00:00:00Z',
};
```

