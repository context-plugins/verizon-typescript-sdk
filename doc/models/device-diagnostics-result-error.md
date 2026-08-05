
# Device Diagnostics Result Error

All error messages are returned in this format. Error codes and messages are listed on the Error Codes page, along with explanations and suggestions for corrective actions.

## Structure

`DeviceDiagnosticsResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | Simple error code. |
| `errorMessage` | `string` | Required | Detailed error message. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof DeviceDiagnosticsResultError) {
    console.log(error.result);
  }
}
```

