
# ESIM Provhistory Request

## Structure

`ESIMProvhistoryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `deviceFilter` | [`DeviceId2[] \| undefined`](../../doc/models/device-id-2.md) | Optional | **Constraints**: *Maximum Items*: `100` |
| `earliest` | `string \| undefined` | Optional | - |
| `latest` | `string \| undefined` | Optional | - |

## Example

```ts
import { ESIMProvhistoryRequest } from 'verizonlib';

const eSIMProvhistoryRequest: ESIMProvhistoryRequest = {
  accountName: '0000123456-00001',
  deviceFilter: [
    {
      id: 'id4',
      kind: 'kind2',
    },
    {
      id: 'id4',
      kind: 'kind2',
    },
    {
      id: 'id4',
      kind: 'kind2',
    }
  ],
  earliest: '2021-10-15T04:49:35-00:00',
  latest: '2021-10-15T04:49:49-00:00',
};
```

