
# Pay as You Go Filter Criteria 1

## Structure

`PayAsYouGoFilterCriteria1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carrierServicePlanCode` | `string \| undefined` | Optional | - |
| `accountNameList` | `string[] \| undefined` | Optional | An array of account names |

## Example

```ts
import { PayAsYouGoFilterCriteria1 } from 'verizonlib';

const payAsYouGoFilterCriteria1: PayAsYouGoFilterCriteria1 = {
  carrierServicePlanCode: 'Service plan code value',
  accountNameList: [
    'accountNameList1'
  ],
};
```

