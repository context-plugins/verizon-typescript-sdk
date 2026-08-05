
# Security Subscription Request

Request for a subscription.

## Structure

`SecuritySubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of a billing account.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `skuNumber` | `string \| undefined` | Optional | The Stock Keeping Unit (SKU). Valid skuNumbers for SIM-Secure for IoT are:SIMSec-IoT-Lt”. (Lifetime) Once a license is assigned to a SIM, the SIM-Secure feature is enabled for the life of the SIM.“TS-BUNDLE-KTO-SIMSEC-MRC”. (Bundle) The SIM-Secure Flex license can be assigned to or removed from a SIM at any time. This SKU is bundled with other ThingSpace Services.*“SIMSec-IoT”. (Flex) The SIM-Secure Flex license can be assigned to or removed from a SIM at any time. This SKU is purchased a la carte.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32` |

## Example

```ts
import { SecuritySubscriptionRequest } from 'verizonlib';

const securitySubscriptionRequest: SecuritySubscriptionRequest = {
  accountName: '000012345600001',
  skuNumber: 'SIMSec-IoT-Lt',
};
```

