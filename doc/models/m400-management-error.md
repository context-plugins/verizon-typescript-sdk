
# M400 Management Error

## Structure

`M400ManagementError`

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
  if (error instanceof M400ManagementError) {
    console.log(error.result);
  }
}
```

