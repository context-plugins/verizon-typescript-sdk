
# Devices Consent Result

## Structure

`DevicesConsentResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | Account identifier in "##########-#####". |
| `allDevice` | `boolean \| undefined` | Optional | Exclude all devices or not? |
| `hasMoreData` | `boolean \| undefined` | Optional | Are there more devices to retrieve or not? |
| `totalCount` | `number \| undefined` | Optional | Total number of excluded devices in the account. |
| `updateTime` | `string \| undefined` | Optional | Last update time. |
| `exclusion` | `string[] \| undefined` | Optional | Device ID list. |

## Example

```ts
import { DevicesConsentResult } from 'verizonlib';

const devicesConsentResult: DevicesConsentResult = {
  accountName: '2024009649-00001',
  allDevice: false,
  hasMoreData: false,
  totalCount: 4,
  updateTime: '2018-05-18 19:20:50.076 +0000 UTC',
  exclusion: [
    '990003420535375',
    '420535399000375',
    'A100003861E585',
    '205353759900034'
  ],
};
```

