
# Connectivity Management Success Result

Response to successful request.

## Structure

`ConnectivityManagementSuccessResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean \| undefined` | Optional | A value of “true” indicates that the device group was created successfully. |

## Example

```ts
import { ConnectivityManagementSuccessResult } from 'verizonlib';

const connectivityManagementSuccessResult: ConnectivityManagementSuccessResult = {
  success: true,
};
```

