
# Dto Configuration Profile

## Structure

`DtoConfigurationProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `profiles` | [`DtoProfile[] \| undefined`](../../doc/models/dto-profile.md) | Optional | - |

## Example

```ts
import { DtoConfigurationProfile } from 'verizonlib';

const dtoConfigurationProfile: DtoConfigurationProfile = {
  accountname: '0000123456-00001',
  profiles: [
    {
      kind: 'kind6',
      version: 'version4',
      modelid: 'modelid2',
      name: 'name8',
      configuration: { 'key1': 'val1', 'key2': 'val2' },
    }
  ],
};
```

