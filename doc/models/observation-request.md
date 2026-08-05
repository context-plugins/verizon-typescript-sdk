
# Observation Request

Used to define callbacks including the device identity, the attribute names, corresponding attribute values and the date/timestamp of when the observation was made.

## Structure

`ObservationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string` | Required | Account identifier in "##########-#####". |
| `devices` | [`Device[]`](../../doc/models/device.md) | Required | List of devices. |
| `attributes` | [`ObservationRequestAttribute[]`](../../doc/models/observation-request-attribute.md) | Required | Attributes are streaming RF parameters that you want to observe. |
| `frequency` | [`NumericalData \| undefined`](../../doc/models/numerical-data.md) | Optional | Describes value and unit of time. |
| `duration` | [`NumericalData \| undefined`](../../doc/models/numerical-data.md) | Optional | Describes value and unit of time. |

## Example

```ts
import { AttributeIdentifierEnum, ObservationRequest } from 'verizonlib';

const observationRequest: ObservationRequest = {
  accountName: '0000123456-00001',
  devices: [
    {
      id: '864508030026238',
      kind: 'IMEI',
    }
  ],
  attributes: [
    {
      name: AttributeIdentifierEnum.RADIOSIGNALSTRENGTH,
    },
    {
      name: AttributeIdentifierEnum.LINKQUALITY,
    },
    {
      name: AttributeIdentifierEnum.NETWORKBEARER,
    },
    {
      name: AttributeIdentifierEnum.CELLID,
    }
  ],
  frequency: {},
  duration: {},
};
```

