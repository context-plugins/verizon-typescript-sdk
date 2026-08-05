
# Fota V3 Callback Registration Result

Callback registration information.

## Structure

`FotaV3CallbackRegistrationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Callback URL. |

## Example

```ts
import { FotaV3CallbackRegistrationResult } from 'verizonlib';

const fotaV3CallbackRegistrationResult: FotaV3CallbackRegistrationResult = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};
```

