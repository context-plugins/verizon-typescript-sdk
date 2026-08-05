
# Daily Usage

## Structure

`DailyUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`GIODeviceId \| undefined`](../../doc/models/gio-device-id.md) | Optional | - |
| `earliest` | `string \| undefined` | Optional | The start date of the time period queried as "$datetime"<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `latest` | `string \| undefined` | Optional | The end date of the time period being queried as "$datetime"<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example

```ts
import { DailyUsage } from 'verizonlib';

const dailyUsage: DailyUsage = {
  deviceId: {
    kind: 'kind8',
    id: 'id0',
  },
  earliest: 'earliest2',
  latest: 'latest8',
};
```

