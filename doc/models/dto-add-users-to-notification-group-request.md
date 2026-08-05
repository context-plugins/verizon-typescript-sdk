
# Dto Add Users to Notification Group Request

## Structure

`DtoAddUsersToNotificationGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `userids` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { DtoAddUsersToNotificationGroupRequest } from 'verizonlib';

const dtoAddUsersToNotificationGroupRequest: DtoAddUsersToNotificationGroupRequest = {
  accountname: '0000123456-00001',
  id: 'id0',
  userids: [
    'userids8',
    'userids7',
    'userids6'
  ],
};
```

