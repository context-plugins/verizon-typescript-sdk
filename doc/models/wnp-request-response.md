
# WNP Request Response

UUID of the Wireless network performance request response.

## Structure

`WNPRequestResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | Request id.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9-]{3,64}$` |

## Example

```ts
import { WNPRequestResponse } from 'verizonlib';

const wNPRequestResponse: WNPRequestResponse = {
  requestId: 'd1f08526-eeee-ffff-gggg-4456490ea9f8',
};
```

