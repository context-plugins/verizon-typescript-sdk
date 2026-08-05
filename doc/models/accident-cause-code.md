
# Accident Cause Code

Cause code wrapper for accident events.

## Structure

`AccidentCauseCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accident2` | `number` | Required | The value shall be set to:<br><br>- 0 `unavailable`                        - in case the information on the sub cause of the accident is unavailable,<br>- 1 `multiVehicleAccident`               - in case more than two vehicles are involved in accident,<br>- 2 `heavyAccident`                      - in case the airbag of the vehicle involved in the accident is triggered,<br><br>*                                          the accident requires important rescue and/or recovery work,<br><br>- 3 `accidentInvolvingLorry`             - in case the accident involves a lorry,<br>- 4 `accidentInvolvingBus`               - in case the accident involves a bus,<br>- 5 `accidentInvolvingHazardousMaterials`- in case the accident involves hazardous material,<br>- 6 `accidentOnOppositeLane`             - in case the accident happens on opposite lanes,<br>- 7 `unsecuredAccident`                  - in case the accident is not secured,<br>- 8 `assistanceRequested`                - in case rescue and assistance are requested,<br>- 9-255                                  - reserved for future usage.<br><br>**Constraints**: `>= 0`, `<= 255` |

## Example

```ts
import { AccidentCauseCode } from 'verizonlib';

const accidentCauseCode: AccidentCauseCode = {
  accident2: 152,
};
```

