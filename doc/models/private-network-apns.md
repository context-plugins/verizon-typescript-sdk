
# Private Network Apns

## Structure

`PrivateNetworkApns`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `apnName` | `string \| null \| undefined` | Optional | the Access Point Name |
| `addressAssignmentMethod` | `string \| null \| undefined` | Optional | The method used for address assignment. |
| `ipaddress` | `string \| null \| undefined` | Optional | A IPv4 address |

## Example

```ts
import { PrivateNetworkApns } from 'verizonlib';

const privateNetworkApns: PrivateNetworkApns = {
  apnName: 'apnName2',
  addressAssignmentMethod: 'addressAssignmentMethod8',
  ipaddress: '10.10.10.01',
};
```

