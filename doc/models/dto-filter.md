
# Dto Filter

## Structure

`DtoFilter`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `expand` | `string \| undefined` | Optional | Use to provide device details for alerts specific to a device |
| `limitnumber` | `number \| undefined` | Optional | Limit the number of results returned<br><br>**Constraints**: `>= 0`, `<= 100` |
| `nopagination` | `boolean \| undefined` | Optional | A flag set to show if pagination requested (false) or not (true) |
| `page` | `string \| undefined` | Optional | - |
| `pagenumber` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |
| `projection` | `string[] \| undefined` | Optional | Limits the fields of the device that the user is interested in rather than all of the fields<br><br>**Constraints**: *Maximum Items*: `100` |
| `selection` | `Record<string, unknown> \| undefined` | Optional | Filters results based on user defined criteria |

## Example

```ts
import { DtoFilter } from 'verizonlib';

const dtoFilter: DtoFilter = {
  expand: 'device detail(s)',
  limitnumber: 100,
  nopagination: true,
  page: 'The number of pages',
  pagenumber: 98,
};
```

