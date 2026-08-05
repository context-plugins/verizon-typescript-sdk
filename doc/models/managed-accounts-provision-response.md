
# Managed Accounts Provision Response

## Structure

`ManagedAccountsProvisionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txid` | `string \| undefined` | Optional | Transaction identifier |
| `accountName` | `string \| undefined` | Optional | Account identifier |
| `paccountName` | `string \| undefined` | Optional | Primary Account identifier |
| `serviceName` | [`ServiceNameEnum \| undefined`](../../doc/models/service-name-enum.md) | Optional | Service name<br><br>**Default**: `ServiceNameEnum.Location` |
| `status` | `string \| undefined` | Optional | Provision status. Success or Fail |
| `reason` | `string \| undefined` | Optional | Detailed reason |

## Example

```ts
import {
  ManagedAccountsProvisionResponse,
  ServiceNameEnum,
} from 'verizonlib';

const managedAccountsProvisionResponse: ManagedAccountsProvisionResponse = {
  txid: '4fbff332-eeee-ffff-gggg-7e3bdc90bd28',
  accountName: '1223334444-00001',
  paccountName: '1223334444-00001',
  serviceName: ServiceNameEnum.Location,
  status: 'Success',
  reason: 'Success',
};
```

