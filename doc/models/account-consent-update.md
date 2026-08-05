
# Account Consent Update

## Structure

`AccountConsentUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account, including leading zeros. |
| `allDeviceConsent` | `number \| undefined` | Optional | The consent setting to use for all the devices in the account. |

## Example

```ts
import { AccountConsentUpdate } from 'verizonlib';

const accountConsentUpdate: AccountConsentUpdate = {
  accountName: '0000123456-00001',
  allDeviceConsent: 0,
};
```

