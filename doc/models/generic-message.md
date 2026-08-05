
# Generic Message

A message carrying a generic (custom) V2X payload.

## Structure

`GenericMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `generic` | [`GenericPayload`](../../doc/models/generic-payload.md) | Required | Custom message which is defined by the user and can support "any" message type or format.<br><br>**Note:** ETX prefers the j2735 or the j2735_gr encoding and only vendor specific message types are allowed to be published in different message formats. |

## Example

```ts
import { GenericMessage } from 'verizonlib';

const genericMessage: GenericMessage = {
  generic: {
    messageType: 'messageType4',
    messageFormat: 'messageFormat6',
    payload: 'payload0',
  },
};
```

