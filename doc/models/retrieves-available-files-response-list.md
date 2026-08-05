
# Retrieves Available Files Response List

## Structure

`RetrievesAvailableFilesResponseList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `availableFilesResponse` | [`RetrievesAvailableFilesResponse[] \| undefined`](../../doc/models/retrieves-available-files-response.md) | Optional | **Constraints**: *Maximum Items*: `100` |

## Example

```ts
import { RetrievesAvailableFilesResponseList } from 'verizonlib';

const retrievesAvailableFilesResponseList: RetrievesAvailableFilesResponseList = {
  availableFilesResponse: [
    {
      fileName: 'fileName2',
      fileVersion: 'fileVersion4',
      releaseNote: 'releaseNote0',
      make: 'make2',
      model: 'model6',
    }
  ],
};
```

