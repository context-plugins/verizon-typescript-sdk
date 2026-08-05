
# Denm Payload

The payload of the DENM PDU.

## Structure

`DenmPayload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `management` | [`Management`](../../doc/models/management.md) | Required | This represent the management container describing the meta information about the event, such as the detection time, the event's location, the source of the event, and the notification distance. |
| `situation` | [`Situation \| undefined`](../../doc/models/situation.md) | Optional | This represents the situation container describing the event and the reliability of the detection source. |

## Example

```ts
import {
  AltitudeConfidenceEnum,
  AwarenessDistanceEnum,
  DenmPayload,
} from 'verizonlib';

const denmPayload: DenmPayload = {
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
};
```

