
# Dto Patch Smart Alert Request

## Structure

`DtoPatchSmartAlertRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountname` | `string \| undefined` | Optional | The numeric account name, which must include leading zeros |
| `resourceidentifier` | [`DtoResourceidentifier \| undefined`](../../doc/models/dto-resourceidentifier.md) | Optional | - |
| `smartalert` | [`UserSmartAlert \| undefined`](../../doc/models/user-smart-alert.md) | Optional | - |

## Example

```ts
import { DtoPatchSmartAlertRequest } from 'verizonlib';

const dtoPatchSmartAlertRequest: DtoPatchSmartAlertRequest = {
  accountname: '0000123456-00001',
  resourceidentifier: {
    id: 'id4',
  },
  smartalert: {
    createdon: '2016-03-13T12:52:32.123Z',
    lastupdated: '2016-03-13T12:52:32.123Z',
    versionid: 'versionid2',
    accountclientid: 'accountclientid6',
    billingaccountid: 'billingaccountid6',
    category: 'category8',
    condition: 154,
    description: 'description0',
  },
};
```

