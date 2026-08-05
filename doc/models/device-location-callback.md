
# Device Location Callback

## Structure

`DeviceLocationCallback`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`CallbackServiceNameEnum`](../../doc/models/callback-service-name-enum.md) | Required | The name of the callback service. |
| `url` | `string` | Required | The location of your callback listener. |

## Example

```ts
import { CallbackServiceNameEnum, DeviceLocationCallback } from 'verizonlib';

const deviceLocationCallback: DeviceLocationCallback = {
  name: CallbackServiceNameEnum.Location,
  url: 'http://10.120.102.183:50559/CallbackListener/LocationServiceMessages.asmx',
};
```

