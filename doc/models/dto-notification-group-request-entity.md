
# Dto Notification Group Request Entity

## Structure

`DtoNotificationGroupRequestEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | a short description |
| `groupemail` | `string \| undefined` | Optional | Contact email for the group |
| `name` | `string \| undefined` | Optional | User defined name of the record |

## Example

```ts
import { DtoNotificationGroupRequestEntity } from 'verizonlib';

const dtoNotificationGroupRequestEntity: DtoNotificationGroupRequestEntity = {
  description: 'a short description',
  groupemail: 'email@domain.com',
  name: 'name of the record',
};
```

