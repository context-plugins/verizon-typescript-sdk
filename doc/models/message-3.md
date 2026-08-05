
# Message 3

## Structure

`Message3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isPrivate` | `boolean` | Required | Defines whether the message is private or public.<br>Private messages are published under the Vendor ID defined in the configuration and only visible to devices of selected vendors.<br>Public messages are published under the Public vendor and are visible to all the users. |
| `roadUserType` | [`RoadUserTypesEnum[]`](../../doc/models/road-user-types-enum.md) | Required | Type of the Road User.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2` |
| `triggerConditions` | [`TriggerConditionEnum[]`](../../doc/models/trigger-condition-enum.md) | Required | Trigger conditions that define on which road user action the message will be sent. If multiple Trigger Conditions are defined any of them will trigger the message.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `limits` | [`Limits[] \| undefined`](../../doc/models/containers/limits.md) | Optional | List of limitations. These limitations can be used for making the trigger condition more precise by defining speed and motion direction requirements to be met before the messages are sent out.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2` |
| `distributionType` | [`DistributionTypesEnum[] \| undefined`](../../doc/models/distribution-types-enum.md) | Optional | Type of the distribution.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2` |
| `distributionSchedule` | [`DistributionSchedule \| undefined`](../../doc/models/distribution-schedule.md) | Optional | The distribution schedule parameters for broadcast messages. |
| `etsiAlert` | [`EtsiAlertPayload`](../../doc/models/etsi-alert-payload.md) | Required | DENM (Decentralized Environmental Notification Message) payload as defined in ETSI. |

## Example

```ts
import {
  AltitudeConfidenceEnum,
  AwarenessDistanceEnum,
  DistributionTypesEnum,
  Message3,
  MessageIdEnum,
  ProtocolVersionEnum,
  RoadUserTypesEnum,
  TriggerConditionEnum,
} from 'verizonlib';

const message3: Message3 = {
  isPrivate: false,
  roadUserType: [
    RoadUserTypesEnum.VulnerableRoadUser,
    RoadUserTypesEnum.Vehicle
  ],
  triggerConditions: [
    TriggerConditionEnum.Leave,
    TriggerConditionEnum.Inside,
    TriggerConditionEnum.Crossing
  ],
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
  limits: [
    {
      speed: {
        min: 64.76,
        max: 138.18,
      },
    },
    {
      speed: {
        min: 64.76,
        max: 138.18,
      },
    },
    {
      speed: {
        min: 64.76,
        max: 138.18,
      },
    }
  ],
  distributionType: [
    DistributionTypesEnum.Broadcast,
    DistributionTypesEnum.Targeted
  ],
  distributionSchedule: {
    repeatPeriod: 90,
    duration: 88,
    startTime: '2016-03-13T12:52:32.123Z',
  },
};
```

