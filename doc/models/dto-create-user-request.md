
# Dto Create User Request

## Structure

`DtoCreateUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `user` | [`DtoUserDTO \| undefined`](../../doc/models/dto-user-dto.md) | Optional | - |

## Example

```ts
import { DtoCreateUserRequest } from 'verizonlib';

const dtoCreateUserRequest: DtoCreateUserRequest = {
  accountname: '0000123456-00001',
  user: {
    email: 'email6',
    firstname: 'firstname8',
    lastname: 'lastname6',
    mdn: 'mdn8',
    customdata: {
      'key0': { 'key1': 'val1', 'key2': 'val2' },
      'key1': { 'key1': 'val1', 'key2': 'val2' },
      'key2': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
};
```

