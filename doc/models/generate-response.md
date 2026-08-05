
# Generate Response

## Structure

`GenerateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`GenerateResponseItem[] \| undefined`](../../doc/models/generate-response-item.md) | Optional | - |

## Example

```ts
import { GenerateResponse } from 'verizonlib';

const generateResponse: GenerateResponse = {
  items: [
    {
      imei: 'imei8',
      credential: {
        username: 'username6',
        password: 'password0',
      },
    },
    {
      imei: 'imei8',
      credential: {
        username: 'username6',
        password: 'password0',
      },
    },
    {
      imei: 'imei8',
      credential: {
        username: 'username6',
        password: 'password0',
      },
    }
  ],
};
```

