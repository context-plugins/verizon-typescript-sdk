
# Fota V2 Result Error

Response for error cases.

## Structure

`FotaV2ResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | Code of the error. |
| `errorMessage` | `string` | Required | Details of the error. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof FotaV2ResultError) {
    console.log(error.result);
  }
}
```

