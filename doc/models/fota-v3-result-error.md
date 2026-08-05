
# Fota V3 Result Error

Error response.

## Structure

`FotaV3ResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | Error code string. |
| `errorMessage` | `string` | Required | Error message string. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof FotaV3ResultError) {
    console.log(error.result);
  }
}
```

