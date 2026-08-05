
# Triggervalues 2

## Structure

`Triggervalues2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | - |
| `triggerName` | `string \| undefined` | Optional | - |
| `accountName` | `string \| undefined` | Optional | - |
| `organizationName` | `string \| undefined` | Optional | - |
| `triggerCategory` | `string \| undefined` | Optional | - |
| `promoAlerts` | [`PromoAlert[] \| undefined`](../../doc/models/promo-alert.md) | Optional | - |
| `active` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `modifiedAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { Triggervalues2 } from 'verizonlib';

const triggervalues2: Triggervalues2 = {
  triggerId: '2874DEC7-26CF-4797-9C6A-B5A2AC72D526',
  triggerName: 'PromoAlerts_0000000000-00001_23456789',
  accountName: '0000123456-000001',
  organizationName: 'Optional group name',
  triggerCategory: 'PromoAlerts',
};
```

