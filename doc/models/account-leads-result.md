
# Account Leads Result

Returns information for all leads associated with an account.

## Structure

`AccountLeadsResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean \| undefined` | Optional | False if no more leads.True if there is more data to be retrieved. |
| `leads` | [`AccountLead[] \| undefined`](../../doc/models/account-lead.md) | Optional | The leads associated with an account. |

## Example

```ts
import { AccountLeadsResult } from 'verizonlib';

const accountLeadsResult: AccountLeadsResult = {
  hasMoreData: false,
  leads: [
    {
      address: {
        addressLine1: '1600 Pennsylvania Avenue',
        city: 'Washington',
        state: 'DC',
        zip: '20500',
        country: 'USA',
        addressLine2: '',
        zip4: 'zip40',
        phone: 'phone4',
        phoneType: 'phoneType0',
        emailAddress: 'emailAddress6',
      },
      leadId: 'L-10001',
      leadState: 'Qualified',
    }
  ],
};
```

