import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Precise location of a road sign in the WGS-84 coordinate system, from which short offsets may be
 * used to create additional data using a flat earth projection centered on this location.
 */
export type RoadSignPosition = {
  /**
   * The geographic latitude of an object, expressed in 1/10th integer microdegrees, as a 31 bit
   * value, and with reference to the horizontal datum then in use. The value 900000001 shall be
   * used when unavailable.
   */
  lat: number;
  /**
   * The geographic longitude of an object, expressed in 1/10th integer microdegrees, as a 32-bit
   * value, and with reference to the horizontal datum then in use. The value 1800000001 shall be
   * used when unavailable.
   */
  long: number;
};

export const roadSignPositionSchema: Schema<RoadSignPosition> = s.object<RoadSignPosition>({
  lat: s.int(),
  long: s.int(),
});
