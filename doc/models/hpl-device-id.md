
# Hpl Device Id

Identifier object pairs of kind/id

## Structure

`HplDeviceId`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | `string \| undefined` | Optional | The type of ID. This can be IMEI or ICCID. |
| `id` | `string \| undefined` | Optional | The ID value. |

## Example

```ts
import { HplDeviceId } from 'verizonlib';

const hplDeviceId: HplDeviceId = {
  kind: 'kind4',
  id: 'id6',
};
```

