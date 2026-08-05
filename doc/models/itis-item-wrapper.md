
# ITIS Item Wrapper

A wrapper carrying an ITIS code item.

## Structure

`ITISItemWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `item` | [`ITISItemContent`](../../doc/models/itis-item-content.md) | Required | An item object wrapping an ITIS code value. |

## Example

```ts
import { ITISItemWrapper } from 'verizonlib';

const iTISItemWrapper: ITISItemWrapper = {
  item: {
    itis: 10,
  },
};
```

