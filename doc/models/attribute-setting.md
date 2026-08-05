
# Attribute Setting

Describes an attribute being observed and the frequency with which the attribute is being observed.

## Structure

`AttributeSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`AttributeIdentifierEnum \| undefined`](../../doc/models/attribute-identifier-enum.md) | Optional | Attribute identifier. |
| `value` | `string \| undefined` | Optional | Attribute value. |
| `createdOn` | `string \| undefined` | Optional | Date and time request was created. |
| `isObservable` | `boolean \| undefined` | Optional | Is the attribute observable? |
| `isObserving` | `boolean \| undefined` | Optional | Is the attribute being observed? |
| `frequency` | [`NumericalData \| undefined`](../../doc/models/numerical-data.md) | Optional | Describes value and unit of time. |

## Example

```ts
import {
  AttributeIdentifierEnum,
  AttributeSetting,
  NumericalDataUnitEnum,
} from 'verizonlib';

const attributeSetting: AttributeSetting = {
  name: AttributeIdentifierEnum.MANUFACTURER,
  value: 'string',
  createdOn: '2019-09-07T23:08:03.532Z',
  isObservable: true,
  isObserving: true,
  frequency: {
    value: 5,
    unit: NumericalDataUnitEnum.SECOND,
  },
};
```

