
# Managed Accounts Add Response

## Structure

`ManagedAccountsAddResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txId` | `string \| undefined` | Optional | Transaction identifier |
| `statusList` | [`StatusList[] \| undefined`](../../doc/models/status-list.md) | Optional | - |

## Example

```ts
import { ManagedAccountsAddResponse } from 'verizonlib';

const managedAccountsAddResponse: ManagedAccountsAddResponse = {
  txId: '2c90bd28-eeee-ffff-gggg-7e3bd4fbff33',
  statusList: [
    {
      id: 'id6',
      status: 'status8',
      reason: 'reason8',
    }
  ],
};
```

