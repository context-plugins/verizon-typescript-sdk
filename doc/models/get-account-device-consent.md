
# Get Account Device Consent

## Structure

`GetAccountDeviceConsent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceList` | `unknown[] \| undefined` | Optional | An array of device identifiers |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account, including leading zeros. |
| `allDeviceConsent` | `number \| undefined` | Optional | If consent is set at the account level, this value will show the consent level. |

## Example

```ts
import { GetAccountDeviceConsent } from 'verizonlib';

const getAccountDeviceConsent: GetAccountDeviceConsent = {
  deviceList: [
    { 'key1': 'val1', 'key2': 'val2' }
  ],
  accountName: '0000123456-00001',
  allDeviceConsent: 1,
};
```

