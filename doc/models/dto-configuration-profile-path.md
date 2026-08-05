
# Dto Configuration Profile Path

## Structure

`DtoConfigurationProfilePath`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `resourceidentifier` | [`DtoResourceidentifier \| undefined`](../../doc/models/dto-resourceidentifier.md) | Optional | - |
| `profile` | [`DtoProfile \| undefined`](../../doc/models/dto-profile.md) | Optional | - |

## Example

```ts
import { DtoConfigurationProfilePath } from 'verizonlib';

const dtoConfigurationProfilePath: DtoConfigurationProfilePath = {
  accountName: '0000123456-00001',
  resourceidentifier: {
    id: 'id4',
  },
  profile: {
    kind: 'kind8',
    version: 'version6',
    modelid: 'modelid4',
    name: 'name0',
    configuration: { 'key1': 'val1', 'key2': 'val2' },
  },
};
```

