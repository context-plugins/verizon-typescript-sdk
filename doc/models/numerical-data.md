
# Numerical Data

Describes value and unit of time.

## Structure

`NumericalData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `number \| undefined` | Optional | Numerical value. |
| `unit` | [`NumericalDataUnitEnum \| undefined`](../../doc/models/numerical-data-unit-enum.md) | Optional | Unit of time. |

## Example

```ts
import { NumericalData, NumericalDataUnitEnum } from 'verizonlib';

const numericalData: NumericalData = {
  value: 5,
  unit: NumericalDataUnitEnum.SECOND,
};
```

