
# Exit Service Content

DataFrame content variant carrying exit service information.

## Structure

`ExitServiceContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exitService` | [`TextPhraseOrITIS[]`](../../doc/models/containers/text-phrase-or-itis.md) | Required | A data frame to allow sequences of ITIS codes, short text strings, and numerical values to be expressed in the normal ITIS vocabulary method and pattern. Note that the allowed text strings are more limited than the normal ITIS format in order to conserve bandwidth.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `16` |

## Example

```ts
import { ExitServiceContent } from 'verizonlib';

const exitServiceContent: ExitServiceContent = {
  exitService: [
    {
      item: {
        itis: 10,
      },
    }
  ],
};
```

