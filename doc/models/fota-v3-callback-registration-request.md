
# Fota V3 Callback Registration Request

Callback URL where the listening service is running.

## Structure

`FotaV3CallbackRegistrationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Callback URL for an subscribed service. |

## Example

```ts
import { FotaV3CallbackRegistrationRequest } from 'verizonlib';

const fotaV3CallbackRegistrationRequest: FotaV3CallbackRegistrationRequest = {
  url: 'https://255.255.11.135:50559/CallbackListener/FirmwareServiceMessages.asmx',
};
```

