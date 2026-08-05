
# Fota V3 Callback Summary

Callback registration information.

## Structure

`FotaV3CallbackSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Callback URL for an subscribed service. |

## Example

```ts
import { FotaV3CallbackSummary } from 'verizonlib';

const fotaV3CallbackSummary: FotaV3CallbackSummary = {
  url: 'http://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx',
};
```

