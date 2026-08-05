
# Rule Rest Error Response Error

## Structure

`RuleRestErrorResponseError`

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
  if (error instanceof RuleRestErrorResponseError) {
    console.log(error.result);
  }
}
```

