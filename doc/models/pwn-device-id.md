
# PWN Device Id

## Structure

`PWNDeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `kind` | `string` | Required | - |

## Example

```ts
import { PWNDeviceId } from 'verizonlib';

const pWNDeviceId: PWNDeviceId = {
  id: '99948099913024600001',
  kind: 'iccid',
};
```

