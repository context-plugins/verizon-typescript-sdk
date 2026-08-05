
# M5 G Bi Address

## Structure

`M5gBiAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `zip` | `string \| undefined` | Optional | - |
| `zip4` | `string \| undefined` | Optional | - |
| `phone` | `string \| undefined` | Optional | - |
| `phoneType` | `string \| undefined` | Optional | - |
| `emailAddress` | `string \| undefined` | Optional | - |

## Example

```ts
import { M5gBiAddress } from 'verizonlib';

const m5gBiAddress: M5gBiAddress = {
  addressLine1: 'number and street',
  city: 'city',
  state: '2-letter state ID (conforms to ISO 3166-2)',
  zip: '5-digit zip code',
  zip4: 'the +4 digits used for zip codes',
  phone: 'a 10-digit phone number',
  phoneType: 'W',
  emailAddress: 'email@emailaddress.com',
};
```

