
# Auth Rest Error Responseforplanner Error

## Structure

`AuthRestErrorResponseforplannerError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fault` | [`AuthSubRestErrorResponseforplanner \| undefined`](../../doc/models/auth-sub-rest-error-responseforplanner.md) | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof AuthRestErrorResponseforplannerError) {
    console.log(error.result);
  }
}
```

