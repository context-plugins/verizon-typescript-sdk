
# Retrieve Response Item

## Structure

`RetrieveResponseItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | Present if credentials exist |
| `failure` | `string \| undefined` | Optional | Present if retrieval failed |

## Example

```ts
import { RetrieveResponseItem } from 'verizonlib';

const retrieveResponseItem: RetrieveResponseItem = {
  imei: '100096454851324',
  username: '290sk9vmybmxi1kmx1kxo8w13u',
  failure: 'No active username',
};
```

