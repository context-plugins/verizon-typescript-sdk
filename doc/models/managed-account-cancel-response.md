
# Managed Account Cancel Response

## Structure

`ManagedAccountCancelResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txid` | `string` | Required | Transaction identifier |
| `accountName` | `string` | Required | Managed account identifier |
| `paccountName` | `string` | Required | Primary account identifier |
| `serviceName` | [`ServiceNameEnum`](../../doc/models/service-name-enum.md) | Required | Service name<br><br>**Default**: `ServiceNameEnum.Location` |
| `status` | `string` | Required | Deactivate/cancel status, Success or Fail |
| `reason` | `string` | Required | Detailed reason |

## Example

```ts
import { ManagedAccountCancelResponse, ServiceNameEnum } from 'verizonlib';

const managedAccountCancelResponse: ManagedAccountCancelResponse = {
  txid: '4fbff332-eeee-ffff-gggg-7e3bdc90bd28',
  accountName: '1223334444-00001',
  paccountName: '1223334444-00001',
  serviceName: ServiceNameEnum.Location,
  status: 'Success',
  reason: 'Success',
};
```

