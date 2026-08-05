
# Aggregate Usage Item

Contains usage information per device.

## Structure

`AggregateUsageItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string \| undefined` | Optional | The International Mobile Equipment Identifier of the device. |
| `numberOfSessions` | `number \| undefined` | Optional | Number of sessions established by the device reporting usage. |
| `bytesTransferred` | `number \| undefined` | Optional | The amount of data transferred by the device reporting usage, measured in Bytes. |

## Example

```ts
import { AggregateUsageItem } from 'verizonlib';

const aggregateUsageItem: AggregateUsageItem = {
  imei: '15-digit IMEI',
  numberOfSessions: 1,
  bytesTransferred: 2057,
};
```

