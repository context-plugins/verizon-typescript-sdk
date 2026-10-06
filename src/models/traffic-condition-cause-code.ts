import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Cause code wrapper for traffic condition events. */
export type TrafficConditionCauseCode = {
  /**
   * The value shall be set to:
   * - 0 `unavailable` - in case further detailed information on the traffic condition is
   *   unavailable,
   * - 1 `increasedVolumeOfTraffic` - in case the type of traffic condition is increased traffic
   *   volume,
   * - 2 `trafficJamSlowlyIncreasing` - in case the type of traffic condition is a traffic jam which
   *   volume is increasing slowly,
   * - 3 `trafficJamIncreasing` - in case the type of traffic condition is a traffic jam which
   *   volume is increasing,
   * - 4 `trafficJamStronglyIncreasing` - in case the type of traffic condition is a traffic jam
   *   which volume is strongly increasing,
   * - 5 `trafficJam` ` - in case the type of traffic condition is a traffic jam and no further
   *   detailed information about its volume is available,
   * - 6 `trafficJamSlightlyDecreasing` - in case the type of traffic condition is a traffic jam
   *   which volume is decreasing slowly,
   * - 7 `trafficJamDecreasing` - in case the type of traffic condition is a traffic jam which
   *   volume is decreasing,
   * - 8 `trafficJamStronglyDecreasing` - in case the type of traffic condition is a traffic jam
   *   which volume is decreasing rapidly,
   * - 9 `trafficJamStable` - in case the traffic condition is a traffic jam with stable volume,
   * - 10-255: reserved for future usage.
   */
  trafficCondition1: number;
};

export const trafficConditionCauseCodeSchema: Schema<TrafficConditionCauseCode> =
  s.object<TrafficConditionCauseCode>({
    trafficCondition1: s.int(),
  });
