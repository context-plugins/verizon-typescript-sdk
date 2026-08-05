
# Software Package

Software package information.

## Structure

`SoftwarePackage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `softwareName` | `string` | Required | Software name. |
| `launchDate` | `string` | Required | Software launch date. |
| `releaseNote` | `string \| undefined` | Optional | Software release note reserved for future use. |
| `model` | `string` | Required | Software applicable device model. |
| `make` | `string` | Required | Software applicable device make. |
| `distributionType` | `string` | Required | LWM2M, OMD-DM or HTTP. |
| `devicePlatformId` | `string` | Required | The platform (Android, iOS, etc.) that the software can be applied to. |

## Example

```ts
import { SoftwarePackage } from 'verizonlib';

const softwarePackage: SoftwarePackage = {
  softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
  launchDate: '2020-08-31',
  model: 'Model-A',
  make: 'Verizon',
  distributionType: 'HTTP',
  devicePlatformId: 'IoT',
  releaseNote: '',
};
```

