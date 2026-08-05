
# Advisory Content

DataFrame content variant carrying advisory ITIS codes.

## Structure

`AdvisoryContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `advisory` | [`AdvisoryItem[]`](../../doc/models/containers/advisory-item.md) | Required | The use of ITIS codes interspersed with free text. The complete set of ITIS codes can be found in Volume Two of the SAE J2540 standard.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `100` |

## Example

```ts
import { AdvisoryContent } from 'verizonlib';

const advisoryContent: AdvisoryContent = {
  advisory: [
    {
      item: {
        itis: 10,
      },
    },
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

