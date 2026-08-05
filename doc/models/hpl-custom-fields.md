
# Hpl Custom Fields

User assigned custom fields to use for fitering

## Structure

`HplCustomFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string \| undefined` | Optional | key property<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32` |
| `value` | `string \| undefined` | Optional | value of the key property<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32` |

## Example

```ts
import { HplCustomFields } from 'verizonlib';

const hplCustomFields: HplCustomFields = {
  key: 'key2',
  value: 'value4',
};
```

