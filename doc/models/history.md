
# History

History data for a selected device and its attributes at a specific time.

## Structure

`History`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | The name of the billing account for which you want retrieve history data. An account name is usually numeric, and must include any leading zeros. |
| `device` | [`Device`](../../doc/models/device.md) | Required | Identifies a particular IoT device. |
| `attributes` | [`HistoryAttributeValue \| undefined`](../../doc/models/history-attribute-value.md) | Optional | Streaming RF parameter for which you want to retrieve history data. |

## Example

```ts
import { AttributeIdentifierEnum, History } from 'verizonlib';

const history: History = {
  accountName: '0000123456-00001',
  device: {
    id: '15-digit IMEI',
    kind: 'IMEI',
  },
  attributes: {
    name: AttributeIdentifierEnum.LINKQUALITY,
    value: '47',
    createdOn: '2022-02-10T16:02:21.406Z',
  },
};
```

