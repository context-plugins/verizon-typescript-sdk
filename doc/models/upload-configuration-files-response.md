
# Upload Configuration Files Response

## Structure

`UploadConfigurationFilesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fileName` | `string \| undefined` | Optional | The name of the file you are upgrading to. |
| `fileVersion` | `string \| undefined` | Optional | The version of the file you are upgrading to. |
| `launchDate` | `string \| undefined` | Optional | Software launch date. |
| `releaseNote` | `string \| undefined` | Optional | Software release note. |
| `model` | `string \| undefined` | Optional | Software applicable device model. |
| `make` | `string \| undefined` | Optional | Software applicable device make. |
| `distributionType` | `string \| undefined` | Optional | LWM2M, OMD-DM or HTTP. |
| `devicePlatformId` | `string \| undefined` | Optional | The platform (Android, iOS, etc.) that the software can be applied to. |
| `localTargetPath` | `string \| undefined` | Optional | Local target path on the device. |

## Example

```ts
import { UploadConfigurationFilesResponse } from 'verizonlib';

const uploadConfigurationFilesResponse: UploadConfigurationFilesResponse = {
  fileName: 'hello-world.txt',
  fileVersion: '1.0',
  launchDate: '2020-08-31',
  releaseNote: 'note',
  model: 'Model-A',
  make: 'Verizon',
  distributionType: 'HTTP',
  devicePlatformId: 'IoT',
  localTargetPath: 'IoT',
};
```

