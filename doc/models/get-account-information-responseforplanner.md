
# Get Account Information Responseforplanner

## Structure

`GetAccountInformationResponseforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `accountNumber` | `string \| null \| undefined` | Optional | The numeric name of the account, including leading zeros. |
| `carriers` | `string[] \| undefined` | Optional | The list of carrier names with profiles.<br><br>**Constraints**: *Maximum Items*: `5` |
| `features` | `string[] \| undefined` | Optional | a list of features associated with the resident profiles.<br><br>**Constraints**: *Maximum Items*: `50` |
| `ipPools` | [`IPPoolforplanner[] \| undefined`](../../doc/models/ip-poolforplanner.md) | Optional | **Constraints**: *Maximum Items*: `50` |
| `isProvisioningAllowed` | `boolean \| undefined` | Optional | A flag indicating if provisioning is allowed (true) or provisioning is locked (false). |
| `organizationName` | `string \| undefined` | Optional | The user assigned organization name. |
| `servicePlans` | [`ServicePlanResponseforplanner[] \| undefined`](../../doc/models/service-plan-responseforplanner.md) | Optional | A list of service plans associated with the resident profiles.<br><br>**Constraints**: *Maximum Items*: `10` |

## Example

```ts
import { GetAccountInformationResponseforplanner } from 'verizonlib';

const getAccountInformationResponseforplanner: GetAccountInformationResponseforplanner = {
  accountName: 'accountName0',
  accountNumber: '0000123456-00001',
  carriers: [
    'carriers8',
    'carriers7',
    'carriers6'
  ],
  features: [
    'features7',
    'features8',
    'features9'
  ],
  ipPools: [
    {
      isDefaultPool: false,
      poolName: 'poolName2',
      poolType: 'poolType6',
    },
    {
      isDefaultPool: false,
      poolName: 'poolName2',
      poolType: 'poolType6',
    },
    {
      isDefaultPool: false,
      poolName: 'poolName2',
      poolType: 'poolType6',
    }
  ],
};
```

