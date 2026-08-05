
# Location Request

The body contains the the account name and list of devices that you want to locate, plus other options.

## Structure

`LocationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier in "##########-#####". |
| `deviceList` | [`DeviceInfo[]`](../../doc/models/device-info.md) | Required | Device list. |
| `accuracyMode` | [`AccuracyModeEnum \| undefined`](../../doc/models/accuracy-mode-enum.md) | Optional | Accurary, currently only 0-coarse supported. |
| `cacheMode` | [`CacheModeEnum \| undefined`](../../doc/models/cache-mode-enum.md) | Optional | Location cache mode. |

## Example

```ts
import { AccuracyModeEnum, CacheModeEnum, LocationRequest } from 'verizonlib';

const locationRequest: LocationRequest = {
  accountName: '1234567890-00001',
  deviceList: [
    {
      id: '980003420535573',
      kind: 'imei',
      mdn: '7892345678',
    },
    {
      id: '375535024300089',
      kind: 'imei',
      mdn: '7897654321',
    },
    {
      id: 'A100003861E585',
      kind: 'meid',
      mdn: '7897650914',
    }
  ],
  accuracyMode: AccuracyModeEnum.Enum0,
  cacheMode: CacheModeEnum.Enum1,
};
```

