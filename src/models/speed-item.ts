import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { speedRangeSchema, type SpeedRange } from "./speed-range.js";

/**
 * Defines the acceptable speed range for road users in m/s. Messages are triggered when:
 *     1. The road user's speed is below the required minimum OR
 *     2. The road user's speed is above the acceptable maximum AND
 *     3. The associated TriggerConditions are met.
 *
 * Example: For the speed range of 10-20 m/s and a TriggerCondition of 'user inside geofence', the
 * message is sent if the user's speed is below 10 m/s or above 20 m/s while in the geofence area.
 */
export type SpeedItem = {
  /** Acceptable speed range for road users in m/s. */
  speed: SpeedRange | null;
};

export const speedItemSchema: Schema<SpeedItem> = s.object<SpeedItem>({
  speed: s.nullable(s.lazy(() => speedRangeSchema)),
});
