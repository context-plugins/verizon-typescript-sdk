
# Status Response

## Structure

`StatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `64`, *Pattern*: `^[a-z-0-9]{3,64}$` |
| `status` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |
| `subrequests` | [`Subrequest[] \| undefined`](../../doc/models/subrequest.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { StatusResponse } from 'verizonlib';

const statusResponse: StatusResponse = {
  requestId: 'd1f08526-5443-4054-9a29-4456490ea9f8',
  status: 'Success',
  subrequests: [
    {
      ids: {
        kind: 'kind2',
        id: 'id4',
      },
      status: 'status2',
    },
    {
      ids: {
        kind: 'kind2',
        id: 'id4',
      },
      status: 'status2',
    }
  ],
};
```

