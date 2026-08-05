
# Dto Create Notification Group Request

## Structure

`DtoCreateNotificationGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `group` | [`DtoNotificationGroupRequestEntity`](../../doc/models/dto-notification-group-request-entity.md) | Required | - |
| `userids` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { DtoCreateNotificationGroupRequest } from 'verizonlib';

const dtoCreateNotificationGroupRequest: DtoCreateNotificationGroupRequest = {
  group: {
    description: 'a short description',
    groupemail: 'email@domain.com',
    name: 'name of the record',
  },
  accountname: '0000123456-00001',
  userids: [
    'userids0'
  ],
};
```

