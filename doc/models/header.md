
# Header

The header of the DENM PDU.

## Structure

`Header`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `protocolVersion` | [`ProtocolVersionEnum`](../../doc/models/protocol-version-enum.md) | Required | The protocol version of the DENM. |
| `messageId` | [`MessageIdEnum`](../../doc/models/message-id-enum.md) | Required | The type of ITIS message (typically 1 for DENM). |
| `stationId` | `number` | Required | The station identifier of the ITS-S. |

## Example

```ts
import { Header, MessageIdEnum, ProtocolVersionEnum } from 'verizonlib';

const header: Header = {
  protocolVersion: ProtocolVersionEnum.Enum2,
  messageId: MessageIdEnum.Enum1,
  stationId: 12345,
};
```

