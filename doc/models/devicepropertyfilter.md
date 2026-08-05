
# Devicepropertyfilter

## Structure

`Devicepropertyfilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `selection` | [`Devicepropertyselection \| undefined`](../../doc/models/devicepropertyselection.md) | Optional | - |
| `querytotalcount` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { Devicepropertyfilter } from 'verizonlib';

const devicepropertyfilter: Devicepropertyfilter = {
  selection: {
    modelid: 'modelid0',
  },
  querytotalcount: true,
};
```

