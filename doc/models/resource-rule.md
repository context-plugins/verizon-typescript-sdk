
# Resource Rule

## Structure

`ResourceRule`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountclientid` | `string \| undefined` | Optional | Not used in this release, future functionality |
| `billingaccountid` | `string \| undefined` | Optional | The billing account ID. This is the same value as the Account ID |
| `createdon` | `string` | Required | Timestamp of the record |
| `description` | `string \| undefined` | Optional | a short description |
| `deviceid` | `string \| undefined` | Optional | This is a UUID value of the device created when the device is onboarded |
| `disabled` | `boolean \| undefined` | Optional | - |
| `foreignid` | `string` | Required | UUID of the ECPD account the user belongs to |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `lastupdated` | `string` | Required | Timestamp of the record |
| `name` | `string \| undefined` | Optional | User defined name of the record |
| `rulechain` | `unknown` | Required | - |
| `rulesyntax` | `string \| undefined` | Optional | The syntax of the rule and supports camel and json style syntaxes |
| `version` | `string \| undefined` | Optional | The resource version |
| `versionid` | `string` | Required | The UUID of the resource version |

## Example

```ts
import { ResourceRule } from 'verizonlib';

const resourceRule: ResourceRule = {
  createdon: '2023-10-02T15:46:34.562Z',
  foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
  lastupdated: '2023-10-02T15:46:34.562Z',
  rulechain: { 'key1': 'val1', 'key2': 'val2' },
  versionid: '337bd2e8-eeee-ffff-gggg-5207992fd395',
  accountclientid: 'null',
  billingaccountid: '0000123456-00001',
  description: 'a short description',
  deviceid: 'The UUID of the device',
  disabled: false,
  name: 'name of the record',
  rulesyntax: 'The rule syntax',
  version: '1.0',
};
```

