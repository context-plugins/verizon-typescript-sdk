
# I Error Message

Error message.

## Structure

`IErrorMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | [`ErrorResponseCodeEnum \| undefined`](../../doc/models/error-response-code-enum.md) | Optional | Error Code. |
| `errorMessage` | `string \| undefined` | Optional | Details and additional information about the error code. |
| `httpStatusCode` | [`HttpStatusCodeEnum \| undefined`](../../doc/models/http-status-code-enum.md) | Optional | HTML error code and description. |
| `detailErrorMessage` | `string \| undefined` | Optional | More detail and information about the HTML error code. |

## Example

```ts
import {
  ErrorResponseCodeEnum,
  HttpStatusCodeEnum,
  IErrorMessage,
} from 'verizonlib';

const iErrorMessage: IErrorMessage = {
  errorCode: ErrorResponseCodeEnum.UNAUTHORIZED,
  errorMessage: 'errorMessage4',
  httpStatusCode: HttpStatusCodeEnum.Enum200OK,
  detailErrorMessage: 'detailErrorMessage4',
};
```

