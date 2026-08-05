
# Message 4

## Class Name

`Message4`

## Cases

| Type |
|  --- |
| [`Message`](../../../doc/models/message.md) |
| [`Message1`](../../../doc/models/message-1.md) |
| [`Message2`](../../../doc/models/message-2.md) |
| [`Message3`](../../../doc/models/message-3.md) |

## Message

### Initialization Code

#### Example

```ts
const value: Message4 = {
  isPrivate: false,
  roadUserType: [
    RoadUserTypesEnum.VulnerableRoadUser
  ],
  triggerConditions: [
    TriggerConditionEnum.Crossing
  ],
  generic: {
    messageType: 'messageType4',
    messageFormat: 'messageFormat6',
    payload: 'payload0',
  },
};
```

## Message1

### Initialization Code

#### Example

```ts
const value: Message4 = {
  isPrivate: false,
  roadUserType: [
    RoadUserTypesEnum.VulnerableRoadUser,
    RoadUserTypesEnum.Vehicle,
    RoadUserTypesEnum.VulnerableRoadUser
  ],
  triggerConditions: [
    TriggerConditionEnum.Crossing,
    TriggerConditionEnum.Enter
  ],
  saeAlert: {
    typeEvent: 160,
    msgCnt: 0,
  },
};
```

## Message2

### Initialization Code

#### Example

```ts
const value: Message4 = {
  isPrivate: false,
  roadUserType: [
    RoadUserTypesEnum.VulnerableRoadUser,
    RoadUserTypesEnum.Vehicle
  ],
  triggerConditions: [
    TriggerConditionEnum.Crossing,
    TriggerConditionEnum.Enter,
    TriggerConditionEnum.Leave
  ],
  saeInfo: {
    dataFrames: [
      {
        frameType: FrameTypeEnum.Unknown,
        msgId: {
          furtherInfoID: '1101',
        },
        startTime: 186,
        durationTime: 44,
        priority: 7,
        regions: [
          {
            direction: '1101',
          }
        ],
        content: {
          advisory: [
            {
              item: {
                itis: 10,
              },
            }
          ],
        },
        doNotUse1: 0,
        doNotUse2: 0,
        doNotUse3: 0,
        doNotUse4: 0,
      }
    ],
    msgCnt: 0,
    timeStamp: 5,
    packetID: 'B343B343B343B343A5',
    urlB: 'http://example.com',
  },
};
```

## Message3

### Initialization Code

#### Example

```ts
const value: Message4 = {
  isPrivate: false,
  roadUserType: [
    RoadUserTypesEnum.VulnerableRoadUser,
    RoadUserTypesEnum.Vehicle
  ],
  triggerConditions: [
    TriggerConditionEnum.Leave,
    TriggerConditionEnum.Inside
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
          },
        },
        stationType: 148,
      },
    },
  },
};
```

