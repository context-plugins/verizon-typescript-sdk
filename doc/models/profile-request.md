
# Profile Request

## Structure

`ProfileRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | - |
| `devices` | [`DeviceList[]`](../../doc/models/device-list.md) | Required | **Constraints**: *Maximum Items*: `100` |
| `carrierName` | `string \| undefined` | Optional | - |
| `servicePlan` | `string \| undefined` | Optional | - |
| `mdnZipCode` | `string \| undefined` | Optional | - |
| `primaryPlaceOfUse` | [`ProfileRequestPrimaryPlaceOfUse[] \| undefined`](../../doc/models/containers/profile-request-primary-place-of-use.md) | Optional | This is Array of a container for any-of cases.<br><br>**Constraints**: *Maximum Items*: `25` |
| `smsrOid` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `46`, *Pattern*: `^[0-9.]{3,46}$` |
| `carrierIpPoolName` | `string \| undefined` | Optional | The name of the pool of IP addresses assigned to the profile. |

## Example

```ts
import { ProfileRequest } from 'verizonlib';

const profileRequest: ProfileRequest = {
  accountName: '0000123456-00001',
  devices: [
    {
      deviceIds: [
        {
          id: 'id0',
          kind: 'kind8',
        }
      ],
    }
  ],
  carrierName: 'the name of the mobile service provider',
  servicePlan: 'The service plan name',
  mdnZipCode: 'five digit zip code',
  primaryPlaceOfUse: [
    {
      customerName: [
        {
          firstName: 'firstName4',
          lastName: 'lastName4',
          title: 'title4',
          middleName: 'middleName8',
          suffix: 'suffix0',
        },
        {
          firstName: 'firstName4',
          lastName: 'lastName4',
          title: 'title4',
          middleName: 'middleName8',
          suffix: 'suffix0',
        }
      ],
    }
  ],
  smsrOid: 'smsrOid4',
};
```

