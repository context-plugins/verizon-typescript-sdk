
# Drop Response

## Structure

`DropResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`DropResponseItem[] \| undefined`](../../doc/models/drop-response-item.md) | Optional | - |

## Example

```ts
import { DropResponse } from 'verizonlib';

const dropResponse: DropResponse = {
  items: [
    {
      imei: 'imei8',
    },
    {
      imei: 'imei8',
    }
  ],
};
```

