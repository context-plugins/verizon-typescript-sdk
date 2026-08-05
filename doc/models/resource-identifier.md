
# Resource Identifier

The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}.

## Structure

`ResourceIdentifier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Target ID. |
| `imei` | `string \| undefined` | Optional | Device IMEI. |

## Example

```ts
import { ResourceIdentifier } from 'verizonlib';

const resourceIdentifier: ResourceIdentifier = {
  id: '2e61a17d-8fd1-6816-e995-e4c2528bf535',
  imei: 'imei6',
};
```

