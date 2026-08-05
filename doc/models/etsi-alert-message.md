
# Etsi Alert Message

Decentralized Environmental Notification Message (DENM) message and its mandatory fields. It is used in order to alert road users of a detected event using ITS communication technologies.

## Structure

`EtsiAlertMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `etsiAlert` | [`EtsiAlertPayload`](../../doc/models/etsi-alert-payload.md) | Required | DENM (Decentralized Environmental Notification Message) payload as defined in ETSI. |

## Example

```ts
import {
  AltitudeConfidenceEnum,
  AwarenessDistanceEnum,
  EtsiAlertMessage,
  MessageIdEnum,
  ProtocolVersionEnum,
} from 'verizonlib';

const etsiAlertMessage: EtsiAlertMessage = {
  etsiAlert: {
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
  },
};
```

