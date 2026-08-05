
# Resource Device

## Structure

`ResourceDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountclientid` | `string \| undefined` | Optional | Not used in this release, future functionality |
| `billingaccountid` | `string \| undefined` | Optional | The billing account ID. This is the same value as the Account ID |
| `chipset` | `string \| undefined` | Optional | The Identifier of chipset used by the device |
| `createdon` | `string` | Required | Timestamp of the record |
| `customdata` | `Record<string, unknown> \| undefined` | Optional | Name/value pair, where the value is client defined.  The purpose is to keep track of current state per device action. |
| `description` | `string \| undefined` | Optional | a short description |
| `esn` | `number \| undefined` | Optional | The Electronic Serial Number (ESN) of the device |
| `fields` | [`DtoFields \| undefined`](../../doc/models/dto-fields.md) | Optional | Fields to return needed by search |
| `foreignid` | `string` | Required | UUID of the ECPD account the user belongs to |
| `hardwareversion` | `string \| undefined` | Optional | The manufacturer's hardware version of the device |
| `iccid` | `string \| undefined` | Optional | The 20-digit Integrated Circuit Card ID (SIM card ID) |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |
| `imei` | `number \| undefined` | Optional | The 15-digit International Mobile Equipment ID |
| `imsi` | `number \| undefined` | Optional | The 64-bit International Mobile Subscriber Identity |
| `lastupdated` | `string` | Required | Timestamp of the record |
| `licenses` | `string[] \| undefined` | Optional | licenses assigned to the device<br><br>**Constraints**: *Maximum Items*: `100` |
| `mac` | `string \| undefined` | Optional | The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX |
| `manufacturer` | `string \| undefined` | Optional | The manufacturer of the device |
| `meid` | `string \| undefined` | Optional | The 56-bit Mobile Equipment ID |
| `msisdn` | `string \| undefined` | Optional | The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number |
| `name` | `string \| undefined` | Optional | User defined name of the record |
| `parentdeviceid` | `string \| undefined` | Optional | this field is applicable for BLE sensors. This represents the value of parent gateway device |
| `productmodel` | `string \| undefined` | Optional | The device model name |
| `providerid` | `string \| undefined` | Optional | The id of the provider who is responible for talking to the device |
| `qrcode` | `string \| undefined` | Optional | The numeric value of the Quick Response (QR) code |
| `refid` | `string \| undefined` | Optional | The device reference ID |
| `refidtype` | `string \| undefined` | Optional | The type of value represented by `refid` |
| `serial` | `string \| undefined` | Optional | The device's serial number |
| `services` | `string[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `100` |
| `sku` | `string \| undefined` | Optional | The Stock Keeping Unit (SKU) number of the device |
| `softwareversion` | `string \| undefined` | Optional | the current device software version |
| `state` | `string` | Required | The current status of the device or transaction and will be `success` or `failed` |
| `version` | `string \| undefined` | Optional | The resource version |
| `versionid` | `string` | Required | The UUID of the resource version |
| `eventretention` | `number \| undefined` | Optional | Data retention period |

## Example

```ts
import { ResourceDevice } from 'verizonlib';

const resourceDevice: ResourceDevice = {
  createdon: '2023-10-02T15:46:34.562Z',
  foreignid: 'c1f178d3-eeee-ffff-gggg-0d6b7ae6022a',
  lastupdated: '2023-10-02T15:46:34.562Z',
  state: 'success',
  versionid: '337bd2e8-eeee-ffff-gggg-5207992fd395',
  accountclientid: 'null',
  billingaccountid: '0000123456-00001',
  chipset: 'The chipset used by the device',
  customdata: {
    'key0': { 'key1': 'val1', 'key2': 'val2' },
    'key1': { 'key1': 'val1', 'key2': 'val2' }
  },
  description: 'a short description',
  fields: {
    additionalProp1: 'string',
    additionalProp2: 'string',
    additionalProp3: 'string',
  },
  hardwareversion: '1.0',
  iccid: 'The 20-digit ICCID',
  mac: 'The Media Access Control (MAC) address',
  manufacturer: 'REOLINK',
  meid: 'The 56-bit Mobile Equipment ID',
  msisdn: 'The Mobile Station International Subscriber Directory Number',
  name: 'name of the record',
  parentdeviceid: 'a gateway UUID',
  productmodel: 'Model name of the device',
  providerid: 'Verizon Wireless',
  qrcode: 'The Quick Response (QR) code',
  refid: 'P3730-1422323050860',
  refidtype: 'The type of value represented by `refid`',
  serial: 'The device\'s serial number',
  sku: 'The Stock Keeping Unit (SKU) number',
  softwareversion: 'the current device software version',
  version: '1.0',
  eventretention: 90,
};
```

