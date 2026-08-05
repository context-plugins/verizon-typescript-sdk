
# Account Identifier

The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`.

## Structure

`AccountIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingaccountid` | `string \| undefined` | Optional | - |

## Example

```ts
import { AccountIdentifier } from 'verizonlib';

const accountIdentifier: AccountIdentifier = {
  billingaccountid: '0000000000-00001',
};
```

