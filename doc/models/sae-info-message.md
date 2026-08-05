
# Sae Info Message

Traveler Information Message (TIM) message and its mandatory fields. The traveler information message is used to send various types of information (advisory and road sign types) to equipped devices.

## Structure

`SaeInfoMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saeInfo` | [`SaeInfoPayload`](../../doc/models/sae-info-payload.md) | Required | Traveler Information Message (TIM) payload as defined in SAE J2735. |

## Example

```ts
import { FrameTypeEnum, SaeInfoMessage } from 'verizonlib';

const saeInfoMessage: SaeInfoMessage = {
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
};
```

