
# GIO Rest Error Response Error

## Structure

`GIORestErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3`, *Pattern*: `^[0-9]{3,3}$` |
| `errorMessage` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `1000`, *Pattern*: `^[A-Za-z0-9 ]{3,32}$` |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof GIORestErrorResponseError) {
    console.log(error.result);
  }
}
```

