
# Generic Sign Content

DataFrame content variant carrying generic sign information.

## Structure

`GenericSignContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `genericSign` | [`TextPhraseOrITIS[]`](../../doc/models/containers/text-phrase-or-itis.md) | Required | A data frame to allow sequences of ITIS codes, short text strings, and numerical values to be expressed in the normal ITIS vocabulary method and pattern. Note that the allowed text strings are more limited than the normal ITIS format in order to conserve bandwidth.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `16` |

## Example

```ts
import { GenericSignContent } from 'verizonlib';

const genericSignContent: GenericSignContent = {
  genericSign: [
    {
      item: {
        itis: 10,
      },
    },
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```

