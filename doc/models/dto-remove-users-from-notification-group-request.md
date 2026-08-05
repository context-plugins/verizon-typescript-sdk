
# Dto Remove Users from Notification Group Request

## Structure

`DtoRemoveUsersFromNotificationGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `userids` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { DtoRemoveUsersFromNotificationGroupRequest } from 'verizonlib';

const dtoRemoveUsersFromNotificationGroupRequest: DtoRemoveUsersFromNotificationGroupRequest = {
  accountname: '0000123456-00001',
  id: 'id0',
  userids: [
    'userids8'
  ],
};
```

