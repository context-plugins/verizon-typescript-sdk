
# Dto Profile

## Structure

`DtoProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `kind` | `string \| undefined` | Optional | profile kind |
| `version` | `string \| undefined` | Optional | The resource version |
| `modelid` | `string \| undefined` | Optional | device model id |
| `name` | `string \| undefined` | Optional | profile name |
| `configuration` | `unknown \| undefined` | Optional | - |

## Example

```ts
import { DtoProfile } from 'verizonlib';

const dtoProfile: DtoProfile = {
  kind: 'the kind of profile being created',
  version: '1.0',
  modelid: '00000000-0000-0000-0000-000000000019',
  name: 'Demo Entry sensor 1730928792',
  configuration: { 'randomInt': 21, 'resportingInterval': 24 },
};
```

