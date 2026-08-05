
# Hyper Precise Location Result Error

Error response.

## Structure

`HyperPreciseLocationResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseCode` | [`ErrorResponseCodeEnum \| undefined`](../../doc/models/error-response-code-enum.md) | Optional | Error Code. |
| `message` | `string \| undefined` | Optional | Error message. |
| `fault` | [`HyperPreciseLocationFault \| undefined`](../../doc/models/hyper-precise-location-fault.md) | Optional | Fault occurred while responding. |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof HyperPreciseLocationResultError) {
    console.log(error.result);
  }
}
```

