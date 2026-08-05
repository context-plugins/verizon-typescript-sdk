
# Dto Profile Response

## Structure

`DtoProfileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `kind` | `string \| undefined` | Optional | the user defined profile kind |
| `version` | `string \| undefined` | Optional | The resource version |
| `versionid` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `64`, *Pattern*: `^[a-zA-Z0-9\-_]+$` |
| `createdon` | `string \| undefined` | Optional | Timestamp of the record |
| `lastupdated` | `string \| undefined` | Optional | Timestamp of the record |
| `name` | `string \| undefined` | Optional | user defined profile name |
| `foreignid` | `string \| undefined` | Optional | UUID of the ECPD account the user belongs to |
| `billingaccountid` | `string \| undefined` | Optional | The billing account ID. This is the same value as the Account ID |
| `modelid` | `string \| undefined` | Optional | device model id |
| `configuration` | `unknown \| undefined` | Optional | - |

## Example

```ts
import { DtoProfileResponse } from 'verizonlib';

const dtoProfileResponse: DtoProfileResponse = {
  id: 'cb4169ec-eeee-ffff-gggg-d2951060421a',
  kind: 'the kind of profile being created',
  version: '1.0',
  versionid: '15bd78a1-eeee-ffff-gggg-86daa842009b',
  createdon: '2023-10-02T15:46:34.562Z',
  lastupdated: '2023-10-02T15:46:34.562Z',
  name: 'Demo Entry sensor 1730928792',
  foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
  billingaccountid: '0000123456-00001',
  modelid: '00000000-0000-0000-0000-000000000019',
  configuration: { 'randomInt': 21, 'resportingInterval': 24 },
};
```

