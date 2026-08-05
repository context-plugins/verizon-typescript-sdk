
# Firmware

Firmware information.

## Structure

`Firmware`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firmwareName` | `string \| undefined` | Optional | The name of the firmware image, provided by the device manufacturer. |
| `participantName` | `string \| undefined` | Optional | Internal reference; can be ignored. |
| `launchDate` | `string \| undefined` | Optional | The release date of the firmware image. |
| `releaseNote` | `string \| undefined` | Optional | Additional information about the release. |
| `model` | `string \| undefined` | Optional | The device model that the firmware applies to. |
| `make` | `string \| undefined` | Optional | The device make that the firmware applies to. |
| `fromVersion` | `string \| undefined` | Optional | The firmware version that must currently be on the device to upgrade. |
| `toVersion` | `string \| undefined` | Optional | The firmware version that will be on the device after an upgrade. |

## Example

```ts
import { Firmware } from 'verizonlib';

const firmware: Firmware = {
  firmwareName: 'FOTA_Verizon_Model-A_01To02_HF',
  participantName: '0402196254-00001',
  launchDate: '2018-04-01T16:03:00.000Z',
  releaseNote: '',
  model: 'Model-A',
  make: 'Verizon',
  fromVersion: 'VerizonFirmwareVersion-01',
  toVersion: 'VerizonFirmwareVersion-02',
};
```

