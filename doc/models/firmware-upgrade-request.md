
# Firmware Upgrade Request

Details of the firmware upgrade request.

## Structure

`FirmwareUpgradeRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier in "##########-#####". |
| `firmwareName` | `string` | Required | The name of the firmware image that will be used for the upgrade, from a GET /firmware response. |
| `firmwareTo` | `string` | Required | The name of the firmware version that will be on the devices after a successful upgrade. |
| `startDate` | `string` | Required | The date that the upgrade begins. |
| `endDate` | `string` | Required | The date that the upgrade ends. |
| `deviceList` | `string[]` | Required | The IMEIs of the devices. |

## Example

```ts
import { FirmwareUpgradeRequest } from 'verizonlib';

const firmwareUpgradeRequest: FirmwareUpgradeRequest = {
  accountName: '0402196254-00001',
  firmwareName: 'FOTA_Verizon_Model-A_01To02_HF',
  firmwareTo: 'VerizonFirmwareVersion-02',
  startDate: '2018-04-01',
  endDate: '2018-04-05',
  deviceList: [
    '990003425730535',
    '990000473475989',
    '990005733420535',
    '990000347475989',
    '990007303425535',
    '990007590473489'
  ],
};
```

