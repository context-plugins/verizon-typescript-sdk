import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Cause code wrapper for roadworks events. */
export type RoadworksCauseCode = {
  /**
   * The value shall be set to:
   * - 0 `unavailable` - in case further detailed information on roadworks is unavailable,
   * - 1 `majorRoadworks` - in case a major roadworks is ongoing,
   * - 2 `roadMarkingWork` - in case a road marking work is ongoing,
   * - 3 `slowMovingRoadMaintenance` - in case slow moving road maintenance work is ongoing,
   * - 4 `shortTermStationaryRoadworks`- in case a short term stationary roadwork is ongoing,
   * - 5 `streetCleaning` - in case a vehicle street cleaning work is ongoing,
   * - 6 `winterService` - in case winter service work is ongoing,
   * - 7 `setupPhase` - in case the work zone is being setup,
   * - 8 `remodellingPhase` - in case the work zone is being changed,
   * - 9 `dismantlingPhase` - in case the work zone is being dismantled after finished work.
   * - 10-255 - are reserved for future usage.
   */
  roadworks3: number;
};

export const roadworksCauseCodeSchema: Schema<RoadworksCauseCode> = s.object<RoadworksCauseCode>({
  roadworks3: s.int(),
});
