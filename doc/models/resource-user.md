
# Resource User

## Structure

`ResourceUser`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountclientid` | `string \| undefined` | Optional | Not used in this release, future functionality |
| `ackterms` | `boolean \| undefined` | Optional | Indicates if terms are agreed to (true) or not |
| `acktermson` | `string \| undefined` | Optional | - |
| `billingaccountid` | `string \| undefined` | Optional | The billing account ID. This is the same value as the Account ID |
| `createdon` | `string` | Required | Timestamp of the record |
| `credentialsid` | `string \| undefined` | Optional | User credentials. The only valid value is an email address |
| `credentialstype` | `string` | Required | The type of credential represented by the ID. The only valid value is `email` |
| `customdata` | `Record<string, unknown> \| undefined` | Optional | Name/value pair, where the value is client defined.  The purpose is to keep track of current state per device action. |
| `description` | `string \| undefined` | Optional | a short description |
| `displayname` | `string \| undefined` | Optional | the user name value to display |
| `email` | `string \| undefined` | Optional | Contact email for the group |
| `firstname` | `string \| undefined` | Optional | The first name in the user record |
| `foreignid` | `string` | Required | UUID of the ECPD account the user belongs to |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `lastname` | `string \| undefined` | Optional | The last name in the user record |
| `lastupdated` | `string` | Required | Timestamp of the record |
| `mdn` | `string \| undefined` | Optional | The Mobile Directory Number |
| `middlename` | `string \| undefined` | Optional | optional field for middle name or initial |
| `name` | `string \| undefined` | Optional | User defined name of the record |
| `secondarybillingaccountids` | `string[] \| undefined` | Optional | Virtual field; will not be used in this implementation<br><br>**Constraints**: *Maximum Items*: `100` |
| `state` | `string \| undefined` | Optional | The current status of the device or transaction and will be `success` or `failed` |
| `version` | `string \| undefined` | Optional | The resource version |
| `versionid` | `string` | Required | The UUID of the resource version |

## Example

```ts
import { ResourceUser } from 'verizonlib';

const resourceUser: ResourceUser = {
  createdon: '2023-10-02T15:46:34.562Z',
  credentialstype: 'email',
  foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
  lastupdated: '2023-10-02T15:46:34.562Z',
  versionid: '337bd2e8-eeee-ffff-gggg-5207992fd395',
  accountclientid: 'null',
  ackterms: true,
  acktermson: '2016-03-13T12:52:32.123Z',
  billingaccountid: '0000123456-00001',
  credentialsid: 'email@domain.com',
  description: 'a short description',
  displayname: 'User name',
  email: 'email@domain.com',
  firstname: 'First name',
  lastname: 'Last name or Surname',
  mdn: '908-555-1234',
  middlename: 'Middle name or initial',
  name: 'name of the record',
  state: 'success',
  version: '1.0',
};
```

