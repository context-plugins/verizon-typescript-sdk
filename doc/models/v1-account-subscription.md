
# V1 Account Subscription

Account subscription information.

## Structure

`V1AccountSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier in "##########-#####". |
| `purchaseType` | `string \| undefined` | Optional | Subscription models used by the account. |
| `licenseCount` | `number \| undefined` | Optional | Number of monthly licenses in an MRC subscription. |
| `licenseUsedCount` | `number \| undefined` | Optional | Number of licenses currently assigned to devices. |
| `updateTime` | `string \| undefined` | Optional | The date and time of when the subscription was last updated. |

## Example

```ts
import { V1AccountSubscription } from 'verizonlib';

const v1AccountSubscription: V1AccountSubscription = {
  accountName: '0402196254-00001',
  purchaseType: 'TS-HFOTA-EVNT,TS-HFOTA-MRC',
  licenseCount: 9000,
  licenseUsedCount: 1000,
  updateTime: '2018-03-02T16:03:06.000Z',
};
```

