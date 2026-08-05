
# Device Location Subscription

## Structure

`DeviceLocationSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier in "##########-#####". |
| `locType` | `string \| undefined` | Optional | Location service license type. |
| `maxAllowance` | `string \| undefined` | Optional | The number of billable location requests allowed per billing cycle. |
| `purchaseTime` | `string \| undefined` | Optional | Location service purchase time. |

## Example

```ts
import { DeviceLocationSubscription } from 'verizonlib';

const deviceLocationSubscription: DeviceLocationSubscription = {
  accountName: '2024009649-00001',
  locType: 'TS-LOC-COARSE-CellID-5K',
  maxAllowance: '5000',
  purchaseTime: '2017-05-10 06:25:25.171 +0000 UTC',
};
```

