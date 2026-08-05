
# Security Subscription Result

Response for a subscription request.

## Structure

`SecuritySubscriptionResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of a billing account. |
| `subscriptionList` | [`SecuritySubscription[] \| undefined`](../../doc/models/security-subscription.md) | Optional | The list of SKU numbers and counts for each license type specified in the request.<br><br>**Constraints**: *Maximum Items*: `5` |

## Example

```ts
import { SecuritySubscriptionResult } from 'verizonlib';

const securitySubscriptionResult: SecuritySubscriptionResult = {
  accountName: '000012345600001',
  subscriptionList: [
    {
      extendedAttributes: [
        {
          key: 'key8',
          value: 'value0',
        },
        {
          key: 'key8',
          value: 'value0',
        }
      ],
      licenseAssigned: 7,
      licenseAvailable: 1,
      licensePurchased: 9,
      licenseType: 'Flexible Bundle',
      skuNumber: 'TS-BUNDLE-KTO-SIMSEC-MRC',
    }
  ],
};
```

