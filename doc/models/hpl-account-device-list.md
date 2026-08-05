
# Hpl Account Device List

A list of device IDs

## Structure

`HplAccountDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`HplDeviceId[] \| undefined`](../../doc/models/hpl-device-id.md) | Optional | - |

## Example

```ts
import { HplAccountDeviceList } from 'verizonlib';

const hplAccountDeviceList: HplAccountDeviceList = {
  deviceIds: [
    {
      kind: 'kind8',
      id: 'id0',
    },
    {
      kind: 'kind8',
      id: 'id0',
    }
  ],
};
```

