
# Dto Overwrite Rule Request

## Structure

`DtoOverwriteRuleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `resourceidentifier` | [`DtoResourceidentifier \| undefined`](../../doc/models/dto-resourceidentifier.md) | Optional | - |
| `rule` | [`ResourceRule \| undefined`](../../doc/models/resource-rule.md) | Optional | - |

## Example

```ts
import { DtoOverwriteRuleRequest } from 'verizonlib';

const dtoOverwriteRuleRequest: DtoOverwriteRuleRequest = {
  accountname: '0000123456-00001',
  resourceidentifier: {
    id: 'id4',
  },
  rule: {
    createdon: '2016-03-13T12:52:32.123Z',
    foreignid: 'foreignid8',
    lastupdated: '2016-03-13T12:52:32.123Z',
    rulechain: { 'key1': 'val1', 'key2': 'val2' },
    versionid: 'versionid2',
    accountclientid: 'accountclientid4',
    billingaccountid: 'billingaccountid6',
    description: 'description0',
    deviceid: 'deviceid0',
    disabled: false,
  },
};
```

