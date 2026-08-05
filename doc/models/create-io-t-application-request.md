
# Create Io T Application Request

The request body must include the UUID of the subscription that you want to update plus any properties that you want to change.

## Structure

`CreateIoTApplicationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appName` | `string \| undefined` | Optional | A user defined name for the application being deployed in Azure IoT Central. |
| `billingAccountID` | `string \| undefined` | Optional | The ThingSpace ID of the authenticating billing account |
| `clientID` | `string \| undefined` | Optional | The Azure ClientID of the associated Azure target account |
| `clientSecret` | `string \| undefined` | Optional | The Azure Client Secret of the associated Azure target account |
| `emailIDs` | `string \| undefined` | Optional | The “email IDs” to be added to/sent to with this API. |
| `resourcegroup` | `string \| undefined` | Optional | The Azure Resource group of the associated Azure target account |
| `sampleIOTcApp` | `string \| undefined` | Optional | This is the reference Azure IoT Central application developed by Verizon. |
| `subscriptionID` | `string \| undefined` | Optional | The Azure Subscription ID of the associated Azure target account |
| `tenantID` | `string \| undefined` | Optional | The Azure Tenant ID of the associated Azure target account |

## Example

```ts
import { CreateIoTApplicationRequest } from 'verizonlib';

const createIoTApplicationRequest: CreateIoTApplicationRequest = {
  appName: 'newarmapp1',
  billingAccountID: '0000123456-00001',
  clientID: 'UUID',
  clientSecret: 'client secret',
  emailIDs: 'email@domain.com',
  resourcegroup: 'Myresourcegroup',
  sampleIOTcApp: 'app ID',
  subscriptionID: 'subscription ID',
  tenantID: 'tenant ID',
};
```

