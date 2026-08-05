
# Dto Delete User Request

## Structure

`DtoDeleteUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |

## Example

```ts
import { DtoDeleteUserRequest } from 'verizonlib';

const dtoDeleteUserRequest: DtoDeleteUserRequest = {
  accountname: '0000123456-00001',
  id: 'id2',
};
```

