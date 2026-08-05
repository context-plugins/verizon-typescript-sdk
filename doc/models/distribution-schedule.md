
# Distribution Schedule

The distribution schedule parameters for broadcast messages.

## Structure

`DistributionSchedule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `repeatPeriod` | `number` | Required | The period (in seconds) that the message needs to be repeatedly send out.<br><br>**Constraints**: `>= 5`, `<= 3600` |
| `duration` | `number` | Required | The amount of time (in minutes) while the messages needs to be sent out.<br><br>**Constraints**: `>= 1`, `<= 32000` |
| `startTime` | `string \| undefined` | Optional | The time (in UTC) when the message transmission should be started. |

## Example

```ts
import { DistributionSchedule } from 'verizonlib';

const distributionSchedule: DistributionSchedule = {
  repeatPeriod: 90,
  duration: 88,
  startTime: '2042-07-21T17:32:28Z',
};
```

