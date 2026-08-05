
# Text Phrase Item Wrapper

A wrapper carrying a text phrase item.

## Structure

`TextPhraseItemWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `item` | [`TextPhraseItemContent`](../../doc/models/text-phrase-item-content.md) | Required | An item object wrapping a text phrase value. |

## Example

```ts
import { TextPhraseItemWrapper } from 'verizonlib';

const textPhraseItemWrapper: TextPhraseItemWrapper = {
  item: {
    text: 'text2',
  },
};
```

