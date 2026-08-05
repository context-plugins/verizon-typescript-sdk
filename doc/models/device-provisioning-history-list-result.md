
# Device Provisioning History List Result

Response to return the provisioning history of a specified device during a specified time period.

## Structure

`DeviceProvisioningHistoryListResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasMoreData` | `boolean \| undefined` | Optional | False for a status 200 response.True for a status 202 response, indicating that there is more data to be retrieved. |
| `provisioningHistory` | [`ProvisioningHistory[] \| undefined`](../../doc/models/provisioning-history.md) | Optional | The provisioning history of a specified device during a specified time period. |

## Example

```ts
import { DeviceProvisioningHistoryListResult } from 'verizonlib';

const deviceProvisioningHistoryListResult: DeviceProvisioningHistoryListResult = {
  hasMoreData: false,
  provisioningHistory: [
    {
      occurredAt: '2015-12-17T13:56:13-05:00',
      status: 'Success',
      eventBy: 'Harry Potter',
      eventType: 'Activation Confirmed',
      mdn: '',
      msisdn: '15086303371',
      servicePlan: 'Tablet5GB',
      extendedAttributes: [],
    }
  ],
};
```

