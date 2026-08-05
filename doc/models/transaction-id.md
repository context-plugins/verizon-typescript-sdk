
# Transaction ID

The transaction ID of the request that you want to cancel, from the POST /devicelocations synchronus response.

## Structure

`TransactionID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `txid` | `string \| undefined` | Optional | - |

## Example

```ts
import { TransactionID } from 'verizonlib';

const transactionID: TransactionID = {
  txid: '2c90bd28-eeee-ffff-gggg-7e3bd4fbff33',
};
```

