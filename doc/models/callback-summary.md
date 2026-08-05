
# Callback Summary

Registered callback information.

## Structure

`CallbackSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | Callback URL for an subscribed service. |

## Example

```ts
import { CallbackSummary } from 'verizonlib';

const callbackSummary: CallbackSummary = {
  url: 'http://10.120.102.183:50559/CallbackListener/FirmwareServiceMessages.asmx',
};
```

