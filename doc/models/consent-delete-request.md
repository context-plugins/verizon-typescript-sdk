
# Consent Delete Request

## Structure

`ConsentDeleteRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier. |
| `deviceList` | `string[] \| undefined` | Optional | Device ID list. |

## Example

```ts
import { ConsentDeleteRequest } from 'verizonlib';

const consentDeleteRequest: ConsentDeleteRequest = {
  accountName: 'MyAccount-1',
  deviceList: [
    'deviceList8',
    'deviceList9'
  ],
};
```

