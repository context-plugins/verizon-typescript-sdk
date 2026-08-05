
# Consent Request

## Structure

`ConsentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier in "##########-#####". |
| `allDevice` | `boolean \| undefined` | Optional | Exclude all devices or not. |
| `type` | `string \| undefined` | Optional | The change to make: append or replace. |
| `exclusion` | `string[] \| undefined` | Optional | Device ID list. |

## Example

```ts
import { ConsentRequest } from 'verizonlib';

const consentRequest: ConsentRequest = {
  accountName: '1234567890-00001',
  allDevice: false,
  type: 'replace',
  exclusion: [
    '980003420535573',
    '375535024300089',
    'A100003861E585'
  ],
};
```

