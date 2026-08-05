
# Account Consent Create

## Structure

`AccountConsentCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceList` | `unknown[] \| undefined` | Optional | An array of device identifiers |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account, including leading zeros. |

## Example

```ts
import { AccountConsentCreate } from 'verizonlib';

const accountConsentCreate: AccountConsentCreate = {
  deviceList: [
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' },
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  accountName: '0000123456-00001',
};
```

