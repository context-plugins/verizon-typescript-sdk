
# Fota V1 Success Result

A response to a successful request contains a single Boolean value.

## Structure

`FotaV1SuccessResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `success` | `boolean \| undefined` | Optional | True is returned in case of success. |

## Example

```ts
import { FotaV1SuccessResult } from 'verizonlib';

const fotaV1SuccessResult: FotaV1SuccessResult = {
  success: true,
};
```

