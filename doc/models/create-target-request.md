
# Create Target Request

Details of the target that you want to create.

## Structure

`CreateTargetRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountidentifier` | [`AccountIdentifier \| undefined`](../../doc/models/account-identifier.md) | Optional | The ID of the authenticating billing account, in the format `{"billingaccountid":"1234567890-12345"}`. |
| `billingaccountid` | `string \| undefined` | Optional | The ID of the authenticating billing account. |
| `kind` | `string \| undefined` | Optional | Identifies the resource kind. Targets are ts.target. |
| `address` | `string \| undefined` | Optional | The endpoint for notifications or data streams. The format depends on the selected `addressscheme`.<br />`streamrest` requires a `host:port` value <br />`streamawsiot` requres a valid ARN. |
| `addressscheme` | `string \| undefined` | Optional | The transport format. Valid values are: <br />streamawsiot - streamed data to an AWS account <br />streamrest - streamed REST data to a defined endpoint. |
| `fields` | [`CreateTargetRequestFields \| undefined`](../../doc/models/create-target-request-fields.md) | Optional | - |
| `description` | `string \| undefined` | Optional | Descriptive information about the target. |
| `externalid` | `string \| undefined` | Optional | Security identification string created by a POST /targets/actions/newextid request. |
| `name` | `string \| undefined` | Optional | Name of the target. |
| `region` | `string \| undefined` | Optional | AWS region value. |
| `key1` | `string \| undefined` | Optional | OAuth 2.0 bearer token. |
| `oauth` | [`TargetAuthentication \| undefined`](../../doc/models/target-authentication.md) | Optional | OAuth 2 token and refresh token for TS to stream events to Target. |

## Example

```ts
import { CreateTargetRequest } from 'verizonlib';

const createTargetRequest: CreateTargetRequest = {
  accountidentifier: {
    billingaccountid: '0000000000-00001',
  },
  billingaccountid: '0000000000-00001',
  kind: 'ts.target',
  address: 'https://your_IoT_Central_Application.azureiotcentral.com',
  addressscheme: 'streamazureiot',
  fields: {
    httpheaders: {
      authorization: 'SharedAccessSignature sr=d1f9b6bf-1380-41f6-b757-d9805e48392b&sig=EF5tnXClw3MWkb84OkIOUhMH%2FaS1DRD2nXT69QR8RD8%3D&skn=TSCCtoken&se=1648827260410',
    },
    devicetypes: [
      'cHeAssetTracker',
      'cHeAssetTrackerV2',
      'tgAssetTracker',
      'tgAssetTrackerV2'
    ],
  },
};
```

