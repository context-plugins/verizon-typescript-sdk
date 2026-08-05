
# Request Trigger

## Structure

`RequestTrigger`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `triggerId` | `string \| undefined` | Optional | - |
| `triggerName` | `string \| undefined` | Optional | - |
| `accountName` | `string \| undefined` | Optional | - |
| `organizationName` | `string \| undefined` | Optional | - |
| `triggerCategory` | `string \| undefined` | Optional | - |
| `promoAlerts` | [`PromoAlert1[] \| undefined`](../../doc/models/promo-alert-1.md) | Optional | - |

## Example

```ts
import { RequestTrigger } from 'verizonlib';

const requestTrigger: RequestTrigger = {
  triggerId: '2874DEC7-26CF-4797-9C6A-B5A2AC72D526',
  triggerName: 'PromoAlerts_0000000000-00001_23456789',
  accountName: '0000123456-000001',
  organizationName: 'Optional group name',
  triggerCategory: 'PromoAlerts',
};
```

