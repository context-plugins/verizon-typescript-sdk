
# M404 Management Error

## Structure

`M404ManagementError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | `string \| undefined` | Optional | - |
| `errorDescription` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `1000` |
| `cause` | `string \| undefined` | Optional | - |

## Example

```ts
try {
  // make the API call
} catch (error) {
  if (error instanceof M404ManagementError) {
    console.log(error.result);
  }
}
```

