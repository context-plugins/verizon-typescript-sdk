
# Diagnostic Observation Setting

Diagnostic observation settings and attributes for a device.

## Structure

`DiagnosticObservationSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountName` | `string \| undefined` | Optional | The name of the billing account for which callback messages will be sent. Format: "##########-#####". |
| `device` | [`Device \| undefined`](../../doc/models/device.md) | Optional | Identifies a particular IoT device. |
| `attributes` | [`AttributeSetting[] \| undefined`](../../doc/models/attribute-setting.md) | Optional | Streaming RF parameters for which you want to retrieve diagnostic settings. |

## Example

```ts
import {
  AttributeIdentifierEnum,
  DiagnosticObservationSetting,
  NumericalDataUnitEnum,
} from 'verizonlib';

const diagnosticObservationSetting: DiagnosticObservationSetting = {
  accountName: 'string',
  device: {
    id: '864508030026238',
    kind: 'IMEI',
  },
  attributes: [
    {
      name: AttributeIdentifierEnum.MANUFACTURER,
      value: 'string',
      createdOn: '2019-09-07T23:08:03.532Z',
      isObservable: true,
      isObserving: true,
      frequency: {
        value: 5,
        unit: NumericalDataUnitEnum.SECOND,
      },
    }
  ],
};
```

