
# Dto Notification Group Response Entity

## Structure

`DtoNotificationGroupResponseEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdon` | `string \| undefined` | Optional | Timestamp of the record |
| `description` | `string \| undefined` | Optional | a short description |
| `foreignid` | `string \| undefined` | Optional | UUID of the ECPD account the user belongs to |
| `groupemail` | `string \| undefined` | Optional | Contact email for the group |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `lastupdated` | `string \| undefined` | Optional | Timestamp of the record |
| `name` | `string \| undefined` | Optional | User defined name of the record |
| `users` | [`DtoUserDTO[] \| undefined`](../../doc/models/dto-user-dto.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `version` | `string \| undefined` | Optional | The resource version |
| `versionid` | `string \| undefined` | Optional | The UUID of the resource version |

## Example

```ts
import { DtoNotificationGroupResponseEntity } from 'verizonlib';

const dtoNotificationGroupResponseEntity: DtoNotificationGroupResponseEntity = {
  createdon: '2023-10-02T15:46:34.562Z',
  description: 'a short description',
  foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
  groupemail: 'email@domain.com',
  id: 'id8',
  lastupdated: '2023-10-02T15:46:34.562Z',
  name: 'name of the record',
  version: '1.0',
  versionid: '337bd2e8-eeee-ffff-gggg-5207992fd395',
};
```

