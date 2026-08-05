
# Fota V1 Result Error

Response in case of any errors.

## Structure

`FotaV1ResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | Error response code. |
| `errorMessage` | `string` | Required | Description of the error. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof FotaV1ResultError) {
    console.log(error.result);
  }
}
```

