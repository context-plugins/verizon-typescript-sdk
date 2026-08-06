
# Custom Fields

Custom data that can be included using key-value pairs.

## Structure

`CustomFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Required | The key for an extended attribute. |
| `value` | `string \| undefined` | Optional | The value of an extended attribute. |

## Example

```ts
import { CustomFields } from 'verizonlib';

const customFields: CustomFields = {
  key: 'CustomField2',
  value: 'SuperVend',
};
```

