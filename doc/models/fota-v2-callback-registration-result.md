
# Fota V2 Callback Registration Result

Callback listener URL.

## Structure

`FotaV2CallbackRegistrationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Callback URL. |

## Example

```ts
import { FotaV2CallbackRegistrationResult } from 'verizonlib';

const fotaV2CallbackRegistrationResult: FotaV2CallbackRegistrationResult = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};
```

