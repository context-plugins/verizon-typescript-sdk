
# Api Response Code

ResponseCode and/or a message indicating success or failure of the request.

## Structure

`ApiResponseCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseCode` | [`ResponseCodeEnum`](../../doc/models/response-code-enum.md) | Required | Possible response codes. |
| `message` | `string` | Required | More details about the responseCode received. |

## Example

```ts
import { ApiResponseCode, ResponseCodeEnum } from 'verizonlib';

const apiResponseCode: ApiResponseCode = {
  responseCode: ResponseCodeEnum.INVALIDACCESS,
  message: 'message2',
};
```

