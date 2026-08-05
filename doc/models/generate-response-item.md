
# Generate Response Item

## Structure

`GenerateResponseItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string \| undefined` | Optional | - |
| `credential` | [`GenerateResponseItemCredential \| undefined`](../../doc/models/generate-response-item-credential.md) | Optional | - |

## Example

```ts
import { GenerateResponseItem } from 'verizonlib';

const generateResponseItem: GenerateResponseItem = {
  imei: '100096454851324',
  credential: {
    username: 'username6',
    password: 'password0',
  },
};
```

