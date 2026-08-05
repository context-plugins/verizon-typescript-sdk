
# ETXMAP Data Ingest Request

JSON representation of a J2735/ETSI MapData message for ingestion. The value field must contain a valid MAP message body conforming to the SAE J2735 or ETSI TS 103 301 standard.

## Structure

`ETXMAPDataIngestRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageId` | `number` | Required | SAE J2735 DSRCmsgID for the MAP message type.<br><br>**Constraints**: `>= 0`, `<= 32767` |
| `value` | `unknown` | Required | The decoded MAP message body containing intersection and lane data. |
| `msgIssueRevision` | `number \| undefined` | Optional | Issue revision number of the MAP message.<br><br>**Constraints**: `>= 0`, `<= 255` |

## Example

```ts
import { ETXMAPDataIngestRequest } from 'verizonlib';

const eTXMAPDataIngestRequest: ETXMAPDataIngestRequest = {
  messageId: 18,
  value: { 'intersections': [{ 'id': { 'region': 0, 'id': 156 }, 'laneWidth': 366, 'refPoint': { 'lat': 389284111, 'long': -772410713 }, 'revision': 3 }], 'msgIssueRevision': 3 },
  msgIssueRevision: 50,
};
```

