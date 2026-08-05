
# Fota V2 Callback Registration Request

Callback URL registration.

## Structure

`FotaV2CallbackRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Callback URL for an subscribed service. |

## Example

```ts
import { FotaV2CallbackRegistrationRequest } from 'verizonlib';

const fotaV2CallbackRegistrationRequest: FotaV2CallbackRegistrationRequest = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};
```

