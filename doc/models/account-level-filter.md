
# Account Level Filter

## Structure

`AccountLevelFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `separateOrCombined` | `string \| undefined` | Optional | Determines whether or not to aggregate usage of multiple accounts together, or separate by account. If this is null or not present, then the trigger will be for an individual line. |
| `accountNames` | [`Accountnames \| undefined`](../../doc/models/accountnames.md) | Optional | - |

## Example

```ts
import { AccountLevelFilter } from 'verizonlib';

const accountLevelFilter: AccountLevelFilter = {
  separateOrCombined: 'Separate',
  accountNames: {
    accountNameList: [
      'accountNameList7',
      'accountNameList8',
      'accountNameList9'
    ],
  },
};
```

