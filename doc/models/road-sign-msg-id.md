
# Road Sign Msg Id

Message ID referencing a road sign location.

## Structure

`RoadSignMsgId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roadSignID` | [`RoadSignID`](../../doc/models/road-sign-id.md) | Required | It provide a precise location of one or more roadside signs. |

## Example

```ts
import { RoadSignMsgId } from 'verizonlib';

const roadSignMsgId: RoadSignMsgId = {
  roadSignID: {
    position: {
      lat: 14,
      mLong: 172,
    },
    viewAngle: '1101',
  },
};
```

