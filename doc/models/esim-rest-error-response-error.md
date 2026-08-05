
# ESIM Rest Error Response Error

## Structure

`ESIMRestErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | - |
| `errorMessage` | `string \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof ESIMRestErrorResponseError) {
    console.log(error.result);
  }
}
```

