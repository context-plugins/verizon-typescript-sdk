
# M5 G Bi Rest Error Response Error

## Structure

`M5gBiRestErrorResponseError`

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
  if (error instanceof M5gBiRestErrorResponseError) {
    console.log(error.result);
  }
}
```

