
# Firmware Package

Available firmware.

## Structure

`FirmwarePackage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firmwareName` | `string` | Required | Firmware name. |
| `firmwareFrom` | `string` | Required | Firmware from version. |
| `firmwareTo` | `string` | Required | Firmware to version. |
| `launchDate` | `string` | Required | Firmware launch date. |
| `releaseNote` | `string` | Required | Firmware release note. |
| `model` | `string` | Required | Firmware applicable device model. |
| `make` | `string` | Required | Firmware applicable device make. |
| `protocol` | [`CampaignMetaInfoProtocolEnum`](../../doc/models/campaign-meta-info-protocol-enum.md) | Required | Firmware protocol. Valid values include: LWM2M, OMD-DM.<br><br>**Default**: `CampaignMetaInfoProtocolEnum.LWM2m` |

## Example

```ts
import { CampaignMetaInfoProtocolEnum, FirmwarePackage } from 'verizonlib';

const firmwarePackage: FirmwarePackage = {
  firmwareName: 'VerizonSmartCommunities_LCO-277C4N_BG96MAR04A04M1G_BG96MAR04A04M1G_BETA0130B',
  firmwareFrom: 'BG96MAR04A04M1G',
  firmwareTo: 'BG96MAR04A04M1G_BETA0130B',
  launchDate: '2012-04-23T18:25:43.511Z',
  releaseNote: '',
  model: 'LCO-277C4N',
  make: 'Verizon Smart Communities',
  protocol: CampaignMetaInfoProtocolEnum.LWM2m,
};
```

