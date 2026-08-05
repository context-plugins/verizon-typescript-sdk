
# Credentials Request

## Structure

`CredentialsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eCPD` | `string` | Required | Enterprise Customer Profile ID |
| `accountNumber` | `string` | Required | Billing Account Number |
| `items` | [`DeviceCredentialRequestItem[]`](../../doc/models/device-credential-request-item.md) | Required | List of devices (1-50 items)<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `50` |

## Example

```ts
import { CredentialsRequest } from 'verizonlib';

const credentialsRequest: CredentialsRequest = {
  eCPD: '3161585',
  accountNumber: '0844021539-00001',
  items: [
    {
      imei: '221000008775573',
    }
  ],
};
```

