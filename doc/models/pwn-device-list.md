
# PWN Device List

## Structure

`PWNDeviceList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceIds` | [`PWNDeviceId[]`](../../doc/models/pwn-device-id.md) | Required | - |

## Example

```ts
import { PWNDeviceList } from 'verizonlib';

const pWNDeviceList: PWNDeviceList = {
  deviceIds: [
    {
      id: '99948099913024600001',
      kind: 'iccid',
    }
  ],
};
```

