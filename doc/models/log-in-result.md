
# Log In Result

Response to initiate a Connectivity Management session and returns a VZ-M2M session token that is required in subsequent API requests.

## Structure

`LogInResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sessionToken` | `string \| undefined` | Optional | The identifier for the session that was created by the request. Store the sessionToken for use in the header of all other API requests. |

## Example

```ts
import { LogInResult } from 'verizonlib';

const logInResult: LogInResult = {
  sessionToken: 'bcce3ea6-fe4f-4952-bacf-eadd80718e83',
};
```

