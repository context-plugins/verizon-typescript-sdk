
# Suspenddetailsobject

## Structure

`Suspenddetailsobject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `suspendFromAccounts` | `string[] \| undefined` | Optional | - |
| `suspendDuration` | `number \| undefined` | Optional | - |
| `suspendOption` | `string \| undefined` | Optional | - |
| `threshold` | `number \| undefined` | Optional | The threshold value the trigger monitors for |
| `thresholdUnit` | [`ThresholdUnitEnum \| undefined`](../../doc/models/threshold-unit-enum.md) | Optional | The units of the threshold. This can be KB, Kilobits, MB, Megabits, or GB, Gigabits |

## Example

```ts
import { Suspenddetailsobject, ThresholdUnitEnum } from 'verizonlib';

const suspenddetailsobject: Suspenddetailsobject = {
  suspendFromAccounts: [
    'suspendFromAccounts7',
    'suspendFromAccounts8',
    'suspendFromAccounts9'
  ],
  suspendDuration: 90,
  suspendOption: 'withBilling',
  threshold: 100,
  thresholdUnit: ThresholdUnitEnum.KB,
};
```

