
# Asynchronous Request Resultforplanner

A successful request returns the request ID (UUID) and the current status.

## Structure

`AsynchronousRequestResultforplanner`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestId` | `string \| null \| undefined` | Optional | The unique ID of a request. This is a UUID value. |

## Example

```ts
import { AsynchronousRequestResultforplanner } from 'verizonlib';

const asynchronousRequestResultforplanner: AsynchronousRequestResultforplanner = {
  requestId: 'd24cc6e4-eeee-ffff-gggg-0ffbb091c076',
};
```

