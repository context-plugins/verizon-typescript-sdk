
# Status List

## Structure

`StatusList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Account name |
| `status` | `string \| undefined` | Optional | Success or Fail |
| `reason` | `string \| undefined` | Optional | detailed reason |

## Example

```ts
import { StatusList } from 'verizonlib';

const statusList: StatusList = {
  id: '1223334444-00001',
  status: 'Success',
  reason: 'Success',
};
```

