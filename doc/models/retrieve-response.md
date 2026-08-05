
# Retrieve Response

## Structure

`RetrieveResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`RetrieveResponseItem[] \| undefined`](../../doc/models/retrieve-response-item.md) | Optional | - |

## Example

```ts
import { RetrieveResponse } from 'verizonlib';

const retrieveResponse: RetrieveResponse = {
  items: [
    {
      imei: 'imei8',
      username: 'username2',
      failure: 'failure8',
    }
  ],
};
```

