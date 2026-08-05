
# Fota V3 Subscription

Information for licenses applied to devices.

## Structure

`FotaV3Subscription`

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
import { FotaV3Subscription } from 'verizonlib';

const fotaV3Subscription: FotaV3Subscription = {
  accountName: '0000123456-000001',
  purchaseType: 'TS-HFOTA-EVNT,TS-HFOTA-MRC',
  licenseCount: 500,
  licenseUsedCount: 400,
  updateTime: '2020-09-17T21:11:32.170Z',
};
```

