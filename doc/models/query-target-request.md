
# Query Target Request

Search for targets by property values.

## Structure

`QueryTargetRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountidentifier` | [`AccountIdentifier \| undefined`](../../doc/models/account-identifier.md) | Optional | The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`. |
| `selection` | `Record<string, string> \| undefined` | Optional | A comma-separated list of properties and comparator values to match against subscriptions in the ThingSpace account. See Working with Query Filters for more information. If the request does not include `$selection`, the response will include all subscriptions to which the requesting user has access. |
| `resourceidentifier` | [`ResourceIdentifier \| undefined`](../../doc/models/resource-identifier.md) | Optional | The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}. |

## Example

```ts
import { QueryTargetRequest } from 'verizonlib';

const queryTargetRequest: QueryTargetRequest = {
  accountidentifier: {
    billingaccountid: '1223334444-00001',
  },
  selection: {
    'key0': '$selection1',
    'key1': '$selection2'
  },
  resourceidentifier: {
    id: 'dd1682d3-2d80-cefc-f3ee-25154800beff',
    imei: 'imei2',
  },
};
```

