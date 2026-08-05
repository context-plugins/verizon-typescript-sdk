
# Fota V2 Subscription

FOTA Subscription.

## Structure

`FotaV2Subscription`

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
import { FotaV2Subscription } from 'verizonlib';

const fotaV2Subscription: FotaV2Subscription = {
  accountName: '00000000000-123345',
  purchaseType: 'TS-HFOTA-EVNT,TS-HFOTA-MRC',
  licenseCount: 500,
  licenseUsedCount: 400,
  updateTime: '2021-06-03 00:03:56.079 +0000 UTC',
};
```

