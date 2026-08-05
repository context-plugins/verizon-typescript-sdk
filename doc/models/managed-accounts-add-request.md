
# Managed Accounts Add Request

## Structure

`ManagedAccountsAddRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier |
| `serviceName` | [`ServiceNameEnum`](../../doc/models/service-name-enum.md) | Required | Service name<br><br>**Default**: `ServiceNameEnum.Location` |
| `type` | `string` | Required | SKU name |
| `managedAccList` | `string[]` | Required | managed account list |

## Example

```ts
import { ManagedAccountsAddRequest, ServiceNameEnum } from 'verizonlib';

const managedAccountsAddRequest: ManagedAccountsAddRequest = {
  accountName: '1234567890-00001',
  serviceName: ServiceNameEnum.Location,
  type: 'TS-LOC-COARSE-CellID-Aggr',
  managedAccList: [
    '1223334444-00001',
    '2334445555-00001',
    '3445556666-00001'
  ],
};
```

