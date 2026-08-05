
# Ready Sim Rest Error Response Error

## Structure

`ReadySimRestErrorResponseError`

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
  if (error instanceof ReadySimRestErrorResponseError) {
    console.log(error.result);
  }
}
```

