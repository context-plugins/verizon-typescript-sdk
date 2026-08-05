
# Device Location Result Error

Will be empty if there was no error.

## Structure

`DeviceLocationResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string` | Required | - |
| `errorMessage` | `string` | Required | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof DeviceLocationResultError) {
    console.log(error.result);
  }
}
```

