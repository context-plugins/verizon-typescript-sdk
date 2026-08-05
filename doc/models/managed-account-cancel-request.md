
# Managed Account Cancel Request

## Structure

`ManagedAccountCancelRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Managed account identifier |
| `paccountName` | `string` | Required | Primary Account identifier |
| `serviceName` | [`ServiceNameEnum`](../../doc/models/service-name-enum.md) | Required | Service name<br><br>**Default**: `ServiceNameEnum.Location` |
| `type` | `string` | Required | SKU name |
| `txid` | `string` | Required | Transaction identifier returned by provision request |

## Example

```ts
import { ManagedAccountCancelRequest, ServiceNameEnum } from 'verizonlib';

const managedAccountCancelRequest: ManagedAccountCancelRequest = {
  accountName: '1223334444-00001',
  paccountName: '1223334444-00001',
  serviceName: ServiceNameEnum.Location,
  type: 'TS-LOC-COARSE-CellID-5K',
  txid: 'd4fbff33-eeee-ffff-gggg-2c90bd287e3b',
};
```

