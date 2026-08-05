
# Triggervalues

## Structure

`Triggervalues`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | - |
| `triggerName` | `string \| undefined` | Optional | - |
| `accountName` | `string \| undefined` | Optional | - |
| `organizationName` | `string \| undefined` | Optional | - |
| `triggerCategory` | `string \| undefined` | Optional | - |
| `triggerAttributes` | [`KeysChunk[] \| undefined`](../../doc/models/containers/keys-chunk.md) | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `modifiedAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { Triggervalues } from 'verizonlib';

const triggervalues: Triggervalues = {
  triggerId: '2874DEC7-26CF-4797-9C6A-B5A2AC72D526',
  triggerName: 'PromoAlerts_0000000000-00001_23456789',
  accountName: '0000123456-000001',
  organizationName: 'Optional group name',
  triggerCategory: 'PromoAlerts',
};
```

