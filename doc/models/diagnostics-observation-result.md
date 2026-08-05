
# Diagnostics Observation Result

A success response containing the current status of the request.

## Structure

`DiagnosticsObservationResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transactionID` | `string` | Required | Transaction identifier. |
| `status` | `string` | Required | Status of the request. |
| `createdOn` | `string` | Required | The date and time of when this request was created. |

## Example

```ts
import { DiagnosticsObservationResult } from 'verizonlib';

const diagnosticsObservationResult: DiagnosticsObservationResult = {
  transactionID: '9c7bb124-11f5-4ff3-8a88-0eec1ba99205',
  status: 'CANCEL_OBSERVE_PENDING',
  createdOn: '2019-09-10T19:05:33.33Z',
};
```

