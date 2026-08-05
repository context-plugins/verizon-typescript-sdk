
# Intelligence Result Error

An error occurred.

## Structure

`IntelligenceResultError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | The 3-digit HTML error code.<br><br>**Constraints**: *Maximum Length*: `3`, *Pattern*: `^[0-9]{3}$` |
| `errorMessage` | `string \| undefined` | Optional | Error Message.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `1000`, *Pattern*: `^[A-Za-z0-9]{3,32}$` |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof IntelligenceResultError) {
    console.log(error.result);
  }
}
```

