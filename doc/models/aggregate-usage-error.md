
# Aggregate Usage Error

Error reported by a device.

## Structure

`AggregateUsageError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `imei` | `string \| undefined` | Optional | The International Mobile Equipment Identifier of the device. |
| `errorMessage` | `string \| undefined` | Optional | A general error message. |
| `errorResponse` | [`IErrorMessage \| undefined`](../../doc/models/i-error-message.md) | Optional | Error message. |

## Example

```ts
import {
  AggregateUsageError,
  ErrorResponseCodeEnum,
  HttpStatusCodeEnum,
} from 'verizonlib';

const aggregateUsageError: AggregateUsageError = {
  imei: '15-digit IMEI',
  errorMessage: 'errorMessage8',
  errorResponse: {
    errorCode: ErrorResponseCodeEnum.INVALIDPARAMETER,
    errorMessage: 'errorMessage4',
    httpStatusCode: HttpStatusCodeEnum.Enum423LOCKED,
    detailErrorMessage: 'detailErrorMessage6',
  },
};
```

