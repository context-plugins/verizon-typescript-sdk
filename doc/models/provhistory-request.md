
# Provhistory Request

## Structure

`ProvhistoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Z a-z 0-9 \-]{3,32}$` |
| `deviceFilter` | [`GIODeviceId[] \| undefined`](../../doc/models/gio-device-id.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `earliest` | `string \| undefined` | Optional | - |
| `latest` | `string \| undefined` | Optional | - |

## Example

```ts
import { ProvhistoryRequest } from 'verizonlib';

const provhistoryRequest: ProvhistoryRequest = {
  accountName: '0000123456-00001',
  deviceFilter: [
    {
      kind: 'kind2',
      id: 'id4',
    },
    {
      kind: 'kind2',
      id: 'id4',
    },
    {
      kind: 'kind2',
      id: 'id4',
    }
  ],
  earliest: '2021-10-15T04:49:35-00:00',
  latest: '2021-10-15T04:49:49-00:00',
};
```

