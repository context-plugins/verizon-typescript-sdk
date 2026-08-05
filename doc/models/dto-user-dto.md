
# Dto User DTO

## Structure

`DtoUserDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string \| undefined` | Optional | Contact email for the group |
| `firstname` | `string \| undefined` | Optional | The first name in the user record |
| `lastname` | `string \| undefined` | Optional | The last name in the user record |
| `mdn` | `string \| undefined` | Optional | The Mobile Directory Number |
| `customdata` | `Record<string, unknown> \| undefined` | Optional | Name/value pair, where the value is client defined.  The purpose is to keep track of current state per device action. |

## Example

```ts
import { DtoUserDTO } from 'verizonlib';

const dtoUserDTO: DtoUserDTO = {
  email: 'email@domain.com',
  firstname: 'First name',
  lastname: 'Last name or Surname',
  mdn: '908-555-1234',
  customdata: {
    'key0': { 'key1': 'val1', 'key2': 'val2' },
    'key1': { 'key1': 'val1', 'key2': 'val2' },
    'key2': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

