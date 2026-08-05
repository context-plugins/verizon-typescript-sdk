
# Etsi Alert Payload

DENM (Decentralized Environmental Notification Message) payload as defined in ETSI.

## Structure

`EtsiAlertPayload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `header` | [`Header`](../../doc/models/header.md) | Required | The header of the DENM PDU. |
| `denm` | [`DenmPayload`](../../doc/models/denm-payload.md) | Required | The payload of the DENM PDU. |

## Example

```ts
import {
  AltitudeConfidenceEnum,
  AwarenessDistanceEnum,
  EtsiAlertPayload,
  MessageIdEnum,
  ProtocolVersionEnum,
} from 'verizonlib';

const etsiAlertPayload: EtsiAlertPayload = {
  header: {
    protocolVersion: ProtocolVersionEnum.Enum2,
    messageId: MessageIdEnum.Enum1,
    stationId: 12345,
  },
  denm: {
    management: {
      actionId: {
        originatingStationId: 28,
        sequenceNumber: 42,
      },
      detectionTime: BigInt(123456789),
      referenceTime: BigInt(123456789),
      eventPosition: {
        latitude: 198,
        longitude: 234,
        positionConfidenceEllipse: {
          semiMajorConfidence: 16,
          semiMinorConfidence: 114,
          semiMajorOrientation: 100,
        },
        altitude: {
          altitudeValue: 236,
          altitudeConfidence: AltitudeConfidenceEnum.Alt00001,
        },
      },
      stationType: 148,
      awarenessDistance: AwarenessDistanceEnum.LessThan50m,
    },
    situation: {
      informationQuality: 7,
      eventType: {
        ccAndScc: {
          trafficCondition1: 26,
        },
      },
    },
  },
};
```

