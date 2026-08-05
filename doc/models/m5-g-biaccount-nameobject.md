
# M5 G Biaccount Nameobject

## Structure

`M5gBiaccountNameobject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | - |
| `billingCycleEndDate` | `string \| undefined` | Optional | - |
| `carrierInformation` | [`M5gBiCarrierInformation[] \| undefined`](../../doc/models/m5-g-bi-carrier-information.md) | Optional | - |
| `connected` | `boolean \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `customFields` | [`M5gBiaccountNameobjectCustomFields[] \| undefined`](../../doc/models/containers/m5-g-biaccount-nameobject-custom-fields.md) | Optional | This is Array of a container for any-of cases. |
| `deviceIds` | [`M5gBiaccountNameobjectDeviceIds[] \| undefined`](../../doc/models/containers/m5-g-biaccount-nameobject-device-ids.md) | Optional | This is Array of a container for any-of cases. |
| `extendedAttributes` | [`M5gBiaccountNameobjectExtendedAttributes[] \| undefined`](../../doc/models/containers/m5-g-biaccount-nameobject-extended-attributes.md) | Optional | This is Array of a container for any-of cases. |
| `groupNames` | [`GroupName[] \| undefined`](../../doc/models/group-name.md) | Optional | - |
| `ipaddress` | `string \| undefined` | Optional | - |
| `lastActivationBy` | `string \| undefined` | Optional | - |
| `lastActivationDate` | `string \| undefined` | Optional | - |

## Example

```ts
import { M5gBiaccountNameobject } from 'verizonlib';

const m5gBiaccountNameobject: M5gBiaccountNameobject = {
  accountName: '0000123456-00001',
  billingCycleEndDate: '2022-11-10T00:00:00.000Z',
  carrierInformation: [
    {
      carrierName: 'carrierName4',
    }
  ],
  connected: false,
  createdAt: '2022-10-20T18:23:41.000Z',
  ipaddress: '0.0.0.0',
  lastActivationBy: 'User Name',
  lastActivationDate: '2022-11-02 T21:36:18Z',
};
```

