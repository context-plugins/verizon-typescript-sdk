
# Data Frame

The data frame allows sending various advisory and road sign types of information to equipped devices.

## Structure

`DataFrame`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `doNotUse1` | `number \| undefined` | Optional | Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 31` |
| `frameType` | [`FrameTypeEnum`](../../doc/models/frame-type-enum.md) | Required | The frameType data element provides the type of message to follow in the rest of the message frame structure. The following frame types are supported:<br><br>- unknown<br>- advisory<br>- roadSignage<br>- commercialSignage |
| `msgId` | [`DataFrameMsgId`](../../doc/models/containers/data-frame-msg-id.md) | Required | This is a container for one-of cases. |
| `startYear` | `number \| undefined` | Optional | The V2X year consists of integer values from zero to 4095 representing the year according to the Gregorian calendar date system. The value of zero shall represent an unknown value.<br><br>**Constraints**: `>= 0`, `<= 4095` |
| `startTime` | `number` | Required | Start time expresses the number of elapsed minutes of the current year in the time system being used (typically UTC time). The value 527040 shall be used for invalid.<br><br>**Constraints**: `>= 0`, `<= 527040` |
| `durationTime` | `number` | Required | The duration, in units of whole minutes, that a object persists for. A value of 32000 means that the object persists forever. The range 0..32000 provides for about 22.2 days of maximum duration.<br><br>**Constraints**: `>= 0`, `<= 32000` |
| `priority` | `number` | Required | The relative importance of the sign, on a scale from zero (least important) to seven (most important).<br><br>**Constraints**: `>= 0`, `<= 7` |
| `doNotUse2` | `number \| undefined` | Optional | Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 31` |
| `regions` | [`GeographicalPath[]`](../../doc/models/geographical-path.md) | Required | The data frame is used to support the cross-cutting need in many V2X messages to describe arbitrary spatial areas (polygons, boundary lines, and other basic shapes) required by various message types in a small message size. This data frame can describe a complex path or region of arbitrary size using either one of the two supported node offset methods (XY offsets or LL offsets) or using simple geometric projections.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `16` |
| `doNotUse3` | `number \| undefined` | Optional | Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 31` |
| `doNotUse4` | `number \| undefined` | Optional | Always set to 0 and carries no meaning. Legacy field maintained for backward compatibility.<br><br>**Default**: `0`<br><br>**Constraints**: `>= 0`, `<= 31` |
| `content` | [`DataFrameContent`](../../doc/models/containers/data-frame-content.md) | Required | This is a container for one-of cases. |
| `contentNew` | [`DataFrameContentNew \| undefined`](../../doc/models/containers/data-frame-content-new.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import { DataFrame, FrameTypeEnum } from 'verizonlib';

const dataFrame: DataFrame = {
  frameType: FrameTypeEnum.Unknown,
  msgId: {
    furtherInfoID: '1101',
  },
  startTime: 30,
  durationTime: 200,
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
  startYear: 168,
  doNotUse2: 0,
  doNotUse3: 0,
  doNotUse4: 0,
};
```

