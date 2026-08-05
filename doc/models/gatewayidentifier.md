
# Gatewayidentifier

## Structure

`Gatewayidentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceid` | `string \| undefined` | Optional | a unique parent deviceid used to group all Lora sensors. Sensors need parent gateway for connection |

## Example

```ts
import { Gatewayidentifier } from 'verizonlib';

const gatewayidentifier: Gatewayidentifier = {
  deviceid: 'UUID of the Gateway device',
};
```

