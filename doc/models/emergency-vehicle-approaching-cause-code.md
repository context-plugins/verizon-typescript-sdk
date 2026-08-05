
# Emergency Vehicle Approaching Cause Code

Cause code wrapper for emergency vehicle approaching events.

## Structure

`EmergencyVehicleApproachingCauseCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emergencyVehicleApproaching95` | `number` | Required | The value shall be set to:<br><br>- 0 `unavailable`                   - in case further detailed information on the emergency vehicle approaching event is unavailable,<br>- 1 `emergencyVehicleApproaching`   - in case an operating emergency vehicle is approaching,<br>- 2 `prioritizedVehicleApproaching` - in case a prioritized vehicle is approaching,<br>- 3-255                             - reserved for future usage.<br><br>**Constraints**: `>= 0`, `<= 255` |

## Example

```ts
import { EmergencyVehicleApproachingCauseCode } from 'verizonlib';

const emergencyVehicleApproachingCauseCode: EmergencyVehicleApproachingCauseCode = {
  emergencyVehicleApproaching95: 220,
};
```

