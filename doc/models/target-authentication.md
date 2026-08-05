
# Target Authentication

OAuth 2 token and refresh token for TS to stream events to Target.

## Structure

`TargetAuthentication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TargetAuthenticationBody \| undefined`](../../doc/models/target-authentication-body.md) | Optional | - |
| `version` | `string \| undefined` | Optional | - |

## Example

```ts
import { TargetAuthentication } from 'verizonlib';

const targetAuthentication: TargetAuthentication = {
  body: {
    grantType: 'refresh_token',
    refreshToken: 'qfeqVjZTYzMmUtZWMzZqfq4ZDUtNzFhZWVkYTlmMjk1',
    scope: 'scope6',
    headers: {
      authorization: 'Basic RGFrqewfq2xpZW50QXBwVjI6YzM5YjqfqmI2LWI2MWQtNDRlZTQ5MmM1YTRk',
      contentType: 'application/x-www-form-urlencoded',
    },
    host: {
      hostandpath: 'https:// myhost.com:1825',
    },
  },
  version: '1.0',
};
```

