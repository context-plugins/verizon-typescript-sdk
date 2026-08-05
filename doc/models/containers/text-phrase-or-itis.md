
# Text Phrase or ITIS

A data frame to allow sequences of ITIS codes, short text strings, and numerical values to be expressed in the normal ITIS vocabulary method and pattern. Note that the allowed text strings are more limited than the normal ITIS format in order to conserve bandwidth.

## Class Name

`TextPhraseOrITIS`

## Cases

| Type |
|  --- |
| [`ITISItemWrapper`](../../../doc/models/itis-item-wrapper.md) |
| [`TextPhraseItemWrapper`](../../../doc/models/text-phrase-item-wrapper.md) |

## ITISItemWrapper

### Initialization Code

#### Example

```ts
const value: TextPhraseOrITIS = {
  item: {
    itis: 10,
  },
};
```

## TextPhraseItemWrapper

### Initialization Code

#### Example

```ts
const value: TextPhraseOrITIS = {
  item: {
    text: 'text2',
  },
};
```

