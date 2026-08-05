
# User Network Experience History

## Structure

`UserNetworkExperienceHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingaccountid` | `string \| undefined` | Optional | The billing account ID. This is the same value as the Account ID |
| `createdon` | `string \| undefined` | Optional | Timestamp of the record |
| `date` | `string \| undefined` | Optional | Timestamp of the record |
| `devicesbad` | `number \| undefined` | Optional | This is a score based on combination of network coverage and network outage affecting the device's ability to connect to the network. This is a count of devices that have failed |
| `devicesfair` | `number \| undefined` | Optional | This is a score based on combination of network coverage and network outage affecting the device's ability to connect to the network. This is a count of devices that are impaired |
| `devicesgood` | `number \| undefined` | Optional | This is a score based on combination of network coverage and network outage affecting the device's ability to connect to the network. This is a count of devices that have no issues |
| `devicestotal` | `number \| undefined` | Optional | A count of all devices |
| `foreignid` | `string \| undefined` | Optional | UUID of the ECPD account the user belongs to |
| `hours` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 24` |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `lastupdated` | `string \| undefined` | Optional | Timestamp of the record |
| `minutes` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 60` |
| `version` | `string \| undefined` | Optional | The resource version |
| `versionid` | `string \| undefined` | Optional | The UUID of the resource version |

## Example

```ts
import { UserNetworkExperienceHistory } from 'verizonlib';

const userNetworkExperienceHistory: UserNetworkExperienceHistory = {
  billingaccountid: '0000123456-00001',
  createdon: '2023-10-02T15:46:34.562Z',
  date: '2023-10-02T15:46:34.562Z',
  devicesbad: 2,
  devicesfair: 2,
  devicesgood: 8,
  devicestotal: 12,
  foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
  lastupdated: '2023-10-02T15:46:34.562Z',
  version: '1.0',
  versionid: '337bd2e8-eeee-ffff-gggg-5207992fd395',
};
```

