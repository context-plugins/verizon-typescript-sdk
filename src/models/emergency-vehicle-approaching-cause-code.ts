import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Cause code wrapper for emergency vehicle approaching events. */
export type EmergencyVehicleApproachingCauseCode = {
  /**
   * The value shall be set to:
   * - 0 `unavailable` - in case further detailed information on the emergency vehicle approaching
   *   event is unavailable,
   * - 1 `emergencyVehicleApproaching` - in case an operating emergency vehicle is approaching,
   * - 2 `prioritizedVehicleApproaching` - in case a prioritized vehicle is approaching,
   * - 3-255 - reserved for future usage.
   */
  emergencyVehicleApproaching95: number;
};

export const emergencyVehicleApproachingCauseCodeSchema: Schema<EmergencyVehicleApproachingCauseCode> =
  s.object<EmergencyVehicleApproachingCauseCode>({
    emergencyVehicleApproaching95: s.int(),
  });
