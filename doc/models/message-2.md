
# Message 2

## Structure

`Message2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isPrivate` | `boolean` | Required | Defines whether the message is private or public.<br>Private messages are published under the Vendor ID defined in the configuration and only visible to devices of selected vendors.<br>Public messages are published under the Public vendor and are visible to all the users. |
| `roadUserType` | [`RoadUserTypesEnum[]`](../../doc/models/road-user-types-enum.md) | Required | Type of the Road User.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2` |
| `triggerConditions` | [`TriggerConditionEnum[]`](../../doc/models/trigger-condition-enum.md) | Required | Trigger conditions that define on which road user action the message will be sent. If multiple Trigger Conditions are defined any of them will trigger the message.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `3` |
| `limits` | [`Limits[] \| undefined`](../../doc/models/containers/limits.md) | Optional | List of limitations. These limitations can be used for making the trigger condition more precise by defining speed and motion direction requirements to be met before the messages are sent out.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2` |
| `distributionType` | [`DistributionTypesEnum[] \| undefined`](../../doc/models/distribution-types-enum.md) | Optional | Type of the distribution.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2` |
| `distributionSchedule` | [`DistributionSchedule \| undefined`](../../doc/models/distribution-schedule.md) | Optional | The distribution schedule parameters for broadcast messages. |
| `saeInfo` | [`SaeInfoPayload`](../../doc/models/sae-info-payload.md) | Required | Traveler Information Message (TIM) payload as defined in SAE J2735. |

## Example

```ts
import {
  DistributionTypesEnum,
  FrameTypeEnum,
  Message2,
  RoadUserTypesEnum,
  TriggerConditionEnum,
} from 'verizonlib';

const message2: Message2 = {
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
            description: {
              path: {
                offset: {
                  ll: {
                    nodes: [
                      {
                        delta: {
                          nodeLatLon: {
                            lon: 40,
                            lat: 10,
                          },
                        },
                      },
                      {
                        delta: {
                          nodeLatLon: {
                            lon: 40,
                            lat: 10,
                          },
                        },
                      }
                    ],
                  },
                },
              },
            },
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
        startYear: 12,
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
    DistributionTypesEnum.Targeted,
    DistributionTypesEnum.Broadcast
  ],
  distributionSchedule: {
    repeatPeriod: 90,
    duration: 88,
    startTime: '2016-03-13T12:52:32.123Z',
  },
};
```

