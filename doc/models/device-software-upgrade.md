
# Device Software Upgrade

Array of software upgrade objects with the specified status.

## Structure

`DeviceSoftwareUpgrade`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceId` | `string` | Required | Device identifier. |
| `id` | `string` | Required | Upgrade identifier. |
| `accountName` | `string` | Required | Account identifier. |
| `softwareName` | `string \| undefined` | Optional | Software name. |
| `startDate` | `string` | Required | Software upgrade start date. |
| `status` | `string` | Required | Software upgrade status. |
| `reason` | `string` | Required | Software upgrade result reason. |

## Example

```ts
import { DeviceSoftwareUpgrade } from 'verizonlib';

const deviceSoftwareUpgrade: DeviceSoftwareUpgrade = {
  deviceId: '990013907835573',
  id: '60b5d639-ccdc-4db8-8824-069bd94c95bf',
  accountName: '0402196254-00001',
  startDate: '2018-03-05',
  status: 'UpgradeSuccess',
  reason: 'success',
  softwareName: 'FOTA_Verizon_Model-A_02To03_HF',
};
```

