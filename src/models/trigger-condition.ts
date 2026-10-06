import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The following options are supported as Trigger TriggerConditions:
 *   - enter: The message is triggered when the road user enters the geofence. For polygons and
 *     multi-polygons only. In case of multi-polygons the message is triggered when the road user
 *     enters any of the polygons.
 *   - leave: The message is triggered when the road user leaves the geofence. For polygons and
 *     multi-polygons only. In case of multi-polygons the message is triggered when the road user
 *     leaves any of the polygons.
 *   - inside: The message is triggered when the road user is inside the geofence. For polygons and
 *     multi-polygons only. In case of multi-polygons the message is triggered when the road user is
 *     inside any of the polygons.
 *   - crossing: The message is triggered when the road user crosses the geofence. For lines and
 *     multi-lines only. In case of multi-lines the message is triggered when the road user crosses
 *     any of the lines.
 */
export const TriggerCondition = {
  Enter: "enter",
  Leave: "leave",
  Inside: "inside",
  Crossing: "crossing",
} as const;
export type TriggerCondition = (typeof TriggerCondition)[keyof typeof TriggerCondition] | (string & {});

export const triggerConditionSchema: EnumSchema<TriggerCondition> =
  s.enumOf<TriggerCondition>(TriggerCondition);
