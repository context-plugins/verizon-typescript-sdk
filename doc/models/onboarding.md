
# Onboarding

## Structure

`Onboarding`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sensoridentifier` | `string \| undefined` | Optional | the IEEE EUI64 address space used to identify a device. It is supplied by the device manufacturer |

## Example

```ts
import { Onboarding } from 'verizonlib';

const onboarding: Onboarding = {
  sensoridentifier: 'The unique EUI64 address of the device',
};
```

