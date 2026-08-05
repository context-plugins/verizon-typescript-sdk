
# Further Info Msg Id

Message ID referencing a further information link (ATIS message).

## Structure

`FurtherInfoMsgId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `furtherInfoID` | `string` | Required | Links to ATIS message. A link to any other incident information data that may be available in the normal ATIS incident description or other messages.<br><br>The value is described as a 4-character hexadecimal string.<br><br>**Constraints**: *Pattern*: `^[0-9A-Fa-f]{4}$` |

## Example

```ts
import { FurtherInfoMsgId } from 'verizonlib';

const furtherInfoMsgId: FurtherInfoMsgId = {
  furtherInfoID: '1101',
};
```

