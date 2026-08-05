
# Aggregate Usage

## Structure

`AggregateUsage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | [`GIODeviceId \| undefined`](../../doc/models/gio-device-id.md) | Optional | - |
| `accountName` | `string \| undefined` | Optional | The numeric name of the account, in the format "0000123456-00001". Leading zeros must be included.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `startTime` | `string \| undefined` | Optional | The start date of the time period queried as "$datetime"<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `endTime` | `string \| undefined` | Optional | The end date of the time period being queried as "$datetime"<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example

```ts
import { AggregateUsage } from 'verizonlib';

const aggregateUsage: AggregateUsage = {
  deviceId: {
    kind: 'kind8',
    id: 'id0',
  },
  accountName: 'accountName6',
  startTime: 'startTime8',
  endTime: 'endTime4',
};
```

