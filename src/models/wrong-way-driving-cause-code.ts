import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Cause code wrapper for wrong way driving events. */
export type WrongWayDrivingCauseCode = {
  /**
   * The value shall be set to:
   * - 0 `unavailable` - in case further detailed information on wrong way driving event is
   *   unavailable,
   * - 1 `wrongLane` - in case vehicle is driving on a lane for which it has no authorization to
   *   use,
   * - 2 `wrongDirection` - in case vehicle is driving in a direction that it is not allowed,
   * - 3-255 - reserved for future usage.
   */
  wrongWayDriving14: number;
};

export const wrongWayDrivingCauseCodeSchema: Schema<WrongWayDrivingCauseCode> =
  s.object<WrongWayDrivingCauseCode>({
    wrongWayDriving14: s.int(),
  });
