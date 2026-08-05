
# Target

Target resource definition.

## Structure

`Target`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string \| undefined` | Optional | The endpoint for data streams. |
| `addressscheme` | `string \| undefined` | Optional | The transport format. |
| `billingaccountid` | `string \| undefined` | Optional | The billing account ID. |
| `createdon` | `string \| undefined` | Optional | The date the resource was created. |
| `externalid` | `string \| undefined` | Optional | Security identification string. |
| `id` | `string \| undefined` | Optional | ThingSpace unique ID for the target that was created. |
| `kind` | `string \| undefined` | Optional | Identifies the resource kind. Targets are ts.target. |
| `lastupdated` | `string \| undefined` | Optional | The date the resource was last updated. |
| `name` | `string \| undefined` | Optional | Name of the target. |
| `region` | `string \| undefined` | Optional | AWS region value. |
| `version` | `string \| undefined` | Optional | Version of the underlying schema resource. |
| `versionid` | `string \| undefined` | Optional | The version of the resource. |
| `description` | `string \| undefined` | Optional | Description of the target. |

## Example

```ts
import { Target } from 'verizonlib';

const target: Target = {
  address: 'arn:aws:iam::252156542789:role/ThingSpace',
  addressscheme: 'streamawsiot',
  billingaccountid: 'billingaccountid8',
  createdon: '2019-01-24T19:06:43.577Z',
  externalid: 'lJZnih8BfqsosZrEEkfPuR3aGOk2i-HIr6tXN275ioJF6bezIrQB9EbzpTRep8J7RmV7QH==',
  id: 'cea170cc-a58f-6531-fc4b-fae1ceb1a6c8',
  kind: 'ts.target',
  lastupdated: '2019-01-24T19:32:31.841Z',
  name: 'AWS Target',
  region: 'us-east-1',
  version: '1.0',
  versionid: 'caf85ff7-200e-11e9-a85b-02420a621e0a',
};
```

