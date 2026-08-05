
# GIO Request Response

## Structure

`GIORequestResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9\-]{3,64}$` |

## Example

```ts
import { GIORequestResponse } from 'verizonlib';

const gIORequestResponse: GIORequestResponse = {
  requestId: 'd1f08526-5443-4054-9a29-4456490ea9f8',
};
```

