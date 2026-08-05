
# Target Authentication Body

## Structure

`TargetAuthenticationBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `grantType` | `string \| undefined` | Optional | Authentication grant type. |
| `refreshToken` | `string \| undefined` | Optional | Refresh token. |
| `scope` | `string \| undefined` | Optional | Authentication scopes. |
| `headers` | [`TargetAuthenticationBodyHeaders \| undefined`](../../doc/models/target-authentication-body-headers.md) | Optional | Authentication headers. |
| `host` | [`TargetAuthenticationBodyHost \| undefined`](../../doc/models/target-authentication-body-host.md) | Optional | Host information. |

## Example

```ts
import { TargetAuthenticationBody } from 'verizonlib';

const targetAuthenticationBody: TargetAuthenticationBody = {
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
};
```

