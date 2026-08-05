
# History Search Filter

The selected device and attributes for which a request should retrieve data.

## Structure

`HistorySearchFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account name identifier. |
| `device` | [`Device`](../../doc/models/device.md) | Required | Identifies a particular IoT device. |
| `attributes` | [`HistorySearchFilterAttributes \| undefined`](../../doc/models/history-search-filter-attributes.md) | Optional | Streaming RF parameters for which you want to retrieve history data. |

## Example

```ts
import { AttributeIdentifierEnum, HistorySearchFilter } from 'verizonlib';

const historySearchFilter: HistorySearchFilter = {
  accountName: '0000123456-00001',
  device: {
    id: '15-digit IMEI',
    kind: 'IMEI',
  },
  attributes: {
    name: AttributeIdentifierEnum.LINKQUALITY,
  },
};
```

