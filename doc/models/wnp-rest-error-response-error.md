
# WNP Rest Error Response Error

Wireless network performance rest error response.

## Structure

`WNPRestErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | Rest error response.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3`, *Pattern*: `^[0-9]{3,3}$` |
| `errorMessage` | `string \| undefined` | Optional | Error message details.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `64`, *Pattern*: `^[A-Za-z0-9 ]{3,64}$` |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof WNPRestErrorResponseError) {
    console.log(error.result);
  }
}
```

