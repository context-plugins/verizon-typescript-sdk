
# Pagination Filter

Pagination filter containing an opaque token for fetching the next/previous page of results.
The page token is returned in the response headers (X-Next, X-Prev) and should be passed as-is.

## Structure

`PaginationFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `string` | Required | Opaque pagination token for fetching the next/previous page of results.<br>This is a encoded string. Do not parse or modify; pass it as received.<br><br>**Constraints**: *Maximum Length*: `4096`, *Pattern*: `^[A-Za-z0-9_-]+={0,2}$` |

## Example

```ts
import { PaginationFilter } from 'verizonlib';

const paginationFilter: PaginationFilter = {
  page: 'H4sICCP5CWkA_25leHQAjM_BCoMwDAbgd_npsUKceOlz7LRbq1UCtbqaDob47mNlgw0GE_7Tn4-QbFCBJ5aYJ-cTTEukX5Ud5NmAiOqq5ExkSi74Qhy7kFe--X_a-WFOB9WRpYsd_fvyWkPJLDZ0c44C09CpaRsNdc0-3T8nkrLXUAOH8uAGxyFwHG1XAPcw4GmpxK_Ccayc5R67_sWwPwIAAP__njV5tUEBAAA=',
};
```

