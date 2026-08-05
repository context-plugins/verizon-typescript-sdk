
# Dto Device Resource Identifier 1

Device identifiers, one or more are required

## Structure

`DtoDeviceResourceIdentifier1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deveui` | `string \| undefined` | Optional | the IEEE EUI64 address space used to identify a device. It is supplied by the device manufacturer |
| `deviceid` | `string \| undefined` | Optional | This is a UUID value of the device created when the device is onboarded |
| `esn` | `number \| undefined` | Optional | The Electronic Serial Number (ESN) of the device |
| `iccid` | `string \| undefined` | Optional | The 20-digit Integrated Circuit Card ID (SIM card ID) |
| `imei` | `number \| undefined` | Optional | The 15-digit International Mobile Equipment ID |
| `imsi` | `number \| undefined` | Optional | The 64-bit International Mobile Subscriber Identity |
| `mac` | `string \| undefined` | Optional | The Media Access Control address of the device, listed on the device in the format XX-XX-XX-XX-XX-XX or XX:XX:XX:XX:XX:XX |
| `manufacturer` | `string \| undefined` | Optional | The manufacturer of the device |
| `meid` | `string \| undefined` | Optional | The 56-bit Mobile Equipment ID |
| `msisdn` | `string \| undefined` | Optional | The Mobile Station International Subscriber Directory Number. In the USA, this is 1+ a 10-digit phone number |
| `nodeUuid` | `string \| undefined` | Optional | The UUID of the node the device is associated with |
| `qrcode` | `string \| undefined` | Optional | The numeric value of the Quick Response (QR) code |
| `serial` | `string \| undefined` | Optional | The device's serial number |
| `id` | `string \| undefined` | Optional | UUID of the user record, assigned at creation |

## Example

```ts
import { DtoDeviceResourceIdentifier1 } from 'verizonlib';

const dtoDeviceResourceIdentifier1: DtoDeviceResourceIdentifier1 = {
  deveui: 'The unique EUI64 address of the device',
  deviceid: 'The UUID of the device',
  esn: 228,
  iccid: 'The 20-digit ICCID',
  imei: 140,
  mac: 'The Media Access Control (MAC) address',
  manufacturer: 'REOLINK',
  meid: 'The 56-bit Mobile Equipment ID',
  msisdn: 'The Mobile Station International Subscriber Directory Number',
  nodeUuid: 'The UUID of the node',
  qrcode: 'The Quick Response (QR) code',
  serial: 'The device\'s serial number',
};
```

