
# Dto Configuration Profile Delete

## Structure

`DtoConfigurationProfileDelete`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `resourceidentifier` | [`DtoResourceidentifier \| undefined`](../../doc/models/dto-resourceidentifier.md) | Optional | - |

## Example

```ts
import { DtoConfigurationProfileDelete } from 'verizonlib';

const dtoConfigurationProfileDelete: DtoConfigurationProfileDelete = {
  accountName: '0000123456-00001',
  resourceidentifier: {
    id: 'id4',
  },
};
```

