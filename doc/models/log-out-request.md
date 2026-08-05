
# Log Out Request

Request to end a Connectivity Management session.

## Structure

`LogOutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sessionToken` | `string \| undefined` | Optional | The session token is returned to confirm that it was invalidated. |

## Example

```ts
import { LogOutRequest } from 'verizonlib';

const logOutRequest: LogOutRequest = {
  sessionToken: 'bcce3ea6-fe4f-4952-bacf-eadd80718e83',
};
```

