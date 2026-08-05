
# Address Item

Address details.

## Structure

`AddressItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| undefined` | Optional | Street Address.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9 ,]{3,32}$` |
| `addressLine2` | `string \| undefined` | Optional | Optional address information.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9 ,]{3,32}$` |
| `city` | `string \| undefined` | Optional | Name of the city.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `32`, *Pattern*: `^[A-Za-z0-9 ]{3,32}$` |
| `state` | `string \| undefined` | Optional | State code.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `3`, *Pattern*: `^[A-Za-z]{2,3}$` |
| `country` | `string \| undefined` | Optional | Country.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3`, *Pattern*: `^[A-Za-z]{3,3}$` |
| `zip` | `string \| undefined` | Optional | Five digit zipcode.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `5`, *Pattern*: `^[0-9]{5,5}$` |
| `zip4` | `string \| undefined` | Optional | Four digit zip code.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{4,4}$` |

## Example

```ts
import { AddressItem } from 'verizonlib';

const addressItem: AddressItem = {
  addressLine1: 'street number and name',
  addressLine2: 'optional address information',
  city: 'name of the city',
  state: 'NY',
  country: 'USA',
  zip: '10001',
  zip4: '0727',
};
```

