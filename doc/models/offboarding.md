
# Offboarding

## Structure

`Offboarding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sensoridentifier` | `string \| undefined` | Optional | the IEEE EUI64 address space used to identify a device. It is supplied by the device manufacturer |

## Example

```ts
import { Offboarding } from 'verizonlib';

const offboarding: Offboarding = {
  sensoridentifier: 'The unique EUI64 address of the device',
};
```

