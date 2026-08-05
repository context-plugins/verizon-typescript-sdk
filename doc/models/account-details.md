
# Account Details

## Structure

`AccountDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9-]{3,32}$` |
| `accountNumber` | `string \| undefined` | Optional | The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9-]{3,32}$` |
| `organizationName` | `string \| undefined` | Optional | user defined name of organization<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[0-9]{3,32}$` |
| `isProvisioningAllowed` | `boolean \| undefined` | Optional | Flag set to indicate if account details can be edited or not. Default is "true". |
| `carriers` | [`Carrier[] \| undefined`](../../doc/models/carrier.md) | Optional | - |
| `features` | [`Feature[] \| undefined`](../../doc/models/feature.md) | Optional | - |
| `servicePlans` | [`CarrierServicePlan[] \| undefined`](../../doc/models/carrier-service-plan.md) | Optional | - |

## Example

```ts
import { AccountDetails } from 'verizonlib';

const accountDetails: AccountDetails = {
  accountName: '0000123456-00001',
  accountNumber: '0000123456-00001',
  organizationName: 'organizationName2',
  isProvisioningAllowed: false,
  carriers: [
    {
      carriers: 'carriers0',
    },
    {
      carriers: 'carriers0',
    },
    {
      carriers: 'carriers0',
    }
  ],
};
```

