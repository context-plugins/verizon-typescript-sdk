
# Error Response Error

## Structure

`ErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseCode` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ErrorResponseError) {
    console.log(error.result);
  }
}
```

