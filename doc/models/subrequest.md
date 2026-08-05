
# Subrequest

## Structure

`Subrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | [`GIODeviceId \| undefined`](../../doc/models/gio-device-id.md) | Optional | - |
| `status` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `8`, *Pattern*: `^[A-Za-z]{3,8}$` |

## Example

```ts
import { Subrequest } from 'verizonlib';

const subrequest: Subrequest = {
  ids: {
    kind: 'kind2',
    id: 'id4',
  },
  status: 'Success',
};
```

