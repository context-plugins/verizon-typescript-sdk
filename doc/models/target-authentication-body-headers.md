
# Target Authentication Body Headers

Authentication headers.

## Structure

`TargetAuthenticationBodyHeaders`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorization` | `string \| undefined` | Optional | Authorization header. |
| `contentType` | `string \| undefined` | Optional | Content-Type header. |

## Example

```ts
import { TargetAuthenticationBodyHeaders } from 'verizonlib';

const targetAuthenticationBodyHeaders: TargetAuthenticationBodyHeaders = {
  authorization: 'Basic RGFrqewfq2xpZW50QXBwVjI6YzM5YjqfqmI2LWI2MWQtNDRlZTQ5MmM1YTRk',
  contentType: 'application/x-www-form-urlencoded',
};
```

