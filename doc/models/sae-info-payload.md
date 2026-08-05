
# Sae Info Payload

Traveler Information Message (TIM) payload as defined in SAE J2735.

## Structure

`SaeInfoPayload`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `msgCnt` | `number \| undefined` | Optional | It is used to provide a sequence number within a stream of messages with the same DSRCmsgID (here RoadSideAlert) and from the same sender.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 127` |
| `timeStamp` | `number \| undefined` | Optional | The number of elapsed minutes of the current year in the time system being used (typically UTC time).<br>-- the value 527040 shall be used for invalid<br><br>**Constraints**: `>= 0`, `<= 527040` |
| `packetID` | `string \| undefined` | Optional | Provides a relatively unique value which can be used to connect to (link to) other supporting messages in other formats.<br><br>The value is described as a 18-character hexadecimal string.<br><br>**Constraints**: *Pattern*: `^[0-9A-Fa-f]{18}$` |
| `urlB` | `string \| undefined` | Optional | A valid internet style URI/URL in the form of a text string which will form the base of a compound string which, when<br>combined with the URL-short data element, will link to the designated resource.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `45` |
| `dataFrames` | [`DataFrame[]`](../../doc/models/data-frame.md) | Required | List of data frames.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `8` |

## Example

```ts
import { FrameTypeEnum, SaeInfoPayload } from 'verizonlib';

const saeInfoPayload: SaeInfoPayload = {
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
};
```

