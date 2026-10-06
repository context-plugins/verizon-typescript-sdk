import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PosConfidenceEllipse = {
  /**
   * Absolute position accuracy in one of the axis direction as defined in a shape of ellipse with a
   * predefined confidence level (set to 4095 when unavailable). The value shall be set to:
   * - `n` (`n > 0` and `n < 4094`) if the accuracy is equal to or less than n * 0,01 metre,
   * - `4094` if the accuracy is out of range, i.e. greater than 4,093 m,
   * - `4095` if the accuracy information is unavailable. The value 0 shall not be used.
   */
  semiMajorConfidence: number;
  /**
   * Absolute position accuracy in one of the axis direction as defined in a shape of ellipse with a
   * predefined confidence level (set to 4095 when unavailable). The value shall be set to:
   * - `n` (`n > 0` and `n < 4094`) if the accuracy is equal to or less than n * 0,01 metre,
   * - `4094` if the accuracy is out of range, i.e. greater than 4,093 m,
   * - `4095` if the accuracy information is unavailable. The value 0 shall not be used.
   */
  semiMinorConfidence: number;
  /**
   * An angle value in degrees described in the WGS84 reference system with respect to the WGS84
   * north. The value shall be set to:
   * - wgs84North (0),
   * - wgs84East (900),
   * - wgs84South (1800),
   * - wgs84West (2700),
   * - doNotUse (3600),
   * - unavailable (3601)
   */
  semiMajorOrientation: number;
};

export const posConfidenceEllipseSchema: Schema<PosConfidenceEllipse> = s.object<PosConfidenceEllipse>({
  semiMajorConfidence: s.int(),
  semiMinorConfidence: s.int(),
  semiMajorOrientation: s.int(),
});
