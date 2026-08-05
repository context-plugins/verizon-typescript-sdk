
# Rest Error Responseforplanner Error

## Structure

`RestErrorResponseforplannerError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | - |
| `errorMessage` | `string \| undefined` | Optional | - |
| `errorUrl` | `string \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof RestErrorResponseforplannerError) {
    console.log(error.result);
  }
}
```

