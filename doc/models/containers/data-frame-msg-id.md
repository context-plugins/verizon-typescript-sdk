
# Data Frame Msg Id

## Class Name

`DataFrameMsgId`

## Cases

| Type |
|  --- |
| [`FurtherInfoMsgId`](../../../doc/models/further-info-msg-id.md) |
| [`RoadSignMsgId`](../../../doc/models/road-sign-msg-id.md) |

## FurtherInfoMsgId

### Initialization Code

#### Example

```ts
const value: DataFrameMsgId = {
  furtherInfoID: '1101',
};
```

## RoadSignMsgId

### Initialization Code

#### Example

```ts
const value: DataFrameMsgId = {
  roadSignID: {
    position: {
      lat: 14,
      mLong: 172,
    },
    viewAngle: '1101',
  },
};
```

