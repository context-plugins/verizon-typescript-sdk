
# Text Item Wrapper

A wrapper carrying a text item.

## Structure

`TextItemWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `item` | [`TextItemContent`](../../doc/models/text-item-content.md) | Required | An item object wrapping a text value. |

## Example

```ts
import { TextItemWrapper } from 'verizonlib';

const textItemWrapper: TextItemWrapper = {
  item: {
    text: 'text2',
  },
};
```

