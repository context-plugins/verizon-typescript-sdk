
# Subscription

Subscription resource definition.

## Structure

`Subscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `configurationfailures` | `number \| undefined` | Optional | The number of streaming failures due to faulty configuration. |
| `createdon` | `string \| undefined` | Optional | The number of streaming failures due to faulty configuration. |
| `delegateid` | `string \| undefined` | Optional | Not currently used. |
| `description` | `string \| undefined` | Optional | Description of the subscription. |
| `disabled` | `boolean \| undefined` | Optional | Whether the subscription is currently sending data. |
| `email` | `string \| undefined` | Optional | The address to which any error reports should be delivered. |
| `filter` | `string \| undefined` | Optional | Filter for events. |
| `id` | `string \| undefined` | Optional | ThingSpace unique ID for the subscription that was created. |
| `kind` | `string \| undefined` | Optional | Identifies the resource kind. |
| `laststreamingstatus` | `string \| undefined` | Optional | Possible values: success or fail. |
| `laststreamingtime` | `string \| undefined` | Optional | The date and time that the last stream send was attempted. |
| `lastupdated` | `string \| undefined` | Optional | The date the resource was last updated. |
| `name` | `string \| undefined` | Optional | Name of the subscription. |
| `networkfailures` | `number \| undefined` | Optional | The number of failures due to network problems. |
| `streamfailures` | `number \| undefined` | Optional | - |
| `streamkind` | `string \| undefined` | Optional | The event type that will be sent in the data stream. |
| `targetid` | `string \| undefined` | Optional | Target to be used for dispatching events. |
| `targettype` | `string \| undefined` | Optional | - |
| `version` | `string \| undefined` | Optional | Version of the underlying schema resource. |
| `versionid` | `string \| undefined` | Optional | The version of the resource. |

## Example

```ts
import { Subscription } from 'verizonlib';

const subscription: Subscription = {
  configurationfailures: 0,
  createdon: '2018-12-21T05:05:02.134Z',
  delegateid: '00000000-0000-0000-0000-000000000000',
  description: 'description4',
  disabled: false,
  id: 'd8c145dd-6948-67ec-ed9b-6a298806bb4a',
  kind: 'ts.subscription',
  laststreamingstatus: '',
  laststreamingtime: '0001-01-01T00:00:00Z',
  lastupdated: '2018-12-21T05:22:12.178Z',
  networkfailures: 0,
  streamfailures: 0,
  streamkind: 'ts.event',
  targetid: '4e211a0e-e39d-6c32-e15b-d6f07f9e2ec8',
  version: '1.0',
  versionid: '5ed6063f-04e0-11e9-8279-02420a5e1b0b',
};
```

