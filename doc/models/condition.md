
# Condition

## Structure

`Condition`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `condition` | [`Keyschunk2[] \| undefined`](../../doc/models/keyschunk-2.md) | Optional | - |

## Example

```ts
import { Condition } from 'verizonlib';

const condition: Condition = {
  condition: [
    {
      dataPercentage50: false,
      dataPercentage75: false,
      dataPercentage90: false,
      dataPercentage100: false,
      smsPercentage50: false,
    }
  ],
};
```

