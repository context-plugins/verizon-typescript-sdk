
# Network Type Object

Network type.

## Structure

`NetworkTypeObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `networkType` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example

```ts
import { NetworkTypeObject } from 'verizonlib';

const networkTypeObject: NetworkTypeObject = {
  networkType: 'LTE',
};
```

