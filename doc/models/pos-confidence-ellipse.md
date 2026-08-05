
# Pos Confidence Ellipse

## Structure

`PosConfidenceEllipse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `semiMajorConfidence` | `number` | Required | Absolute position accuracy in one of the axis direction as defined in a shape of ellipse with a predefined confidence level (set to 4095 when unavailable).<br>The value shall be set to:<br><br>- `n` (`n > 0` and `n < 4094`) if the accuracy is equal to or less than n * 0,01 metre,<br>- `4094` if the accuracy is out of range, i.e. greater than 4,093 m,<br>- `4095` if the accuracy information is unavailable.<br>  The value 0 shall not be used.<br><br>**Constraints**: `>= 0`, `<= 4095` |
| `semiMinorConfidence` | `number` | Required | Absolute position accuracy in one of the axis direction as defined in a shape of ellipse with a predefined confidence level (set to 4095 when unavailable).<br>The value shall be set to:<br><br>- `n` (`n > 0` and `n < 4094`) if the accuracy is equal to or less than n * 0,01 metre,<br>- `4094` if the accuracy is out of range, i.e. greater than 4,093 m,<br>- `4095` if the accuracy information is unavailable.<br>  The value 0 shall not be used.<br><br>**Constraints**: `>= 0`, `<= 4095` |
| `semiMajorOrientation` | `number` | Required | An angle value in degrees described in the WGS84 reference system with respect to the WGS84 north.<br>The value shall be set to:<br><br>- wgs84North  (0),<br>- wgs84East   (900),<br>- wgs84South  (1800),<br>- wgs84West   (2700),<br>- doNotUse    (3600),<br>- unavailable (3601)<br><br>**Constraints**: `>= 0`, `<= 3601` |

## Example

```ts
import { PosConfidenceEllipse } from 'verizonlib';

const posConfidenceEllipse: PosConfidenceEllipse = {
  semiMajorConfidence: 122,
  semiMinorConfidence: 8,
  semiMajorOrientation: 206,
};
```

