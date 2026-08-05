
# Mdm Error Response Error

error response structure

## Structure

`MdmErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string` | Required | The short summary of the error<br><br>**Constraints**: *Maximum Length*: `1024`, *Pattern*: `^[a-zA-Z0-9_-]+$` |
| `description` | `string` | Required | The detailed description of the error<br><br>**Constraints**: *Maximum Length*: `4096`, *Pattern*: `^[a-zA-Z0-9_-]+$` |
| `uuid` | `string` | Required | The unique identifier of the request for tracing |
| `timestamp` | `string` | Required | The timestamp of when the error occurred |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof MdmErrorResponseError) {
    console.log(error.result);
  }
}
```

