
# Connectivity Management Result Error

Response to errors.

## Structure

`ConnectivityManagementResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | Code of the error. |
| `errorMessage` | `string \| undefined` | Optional | Details of the error. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ConnectivityManagementResultError) {
    console.log(error.result);
  }
}
```

