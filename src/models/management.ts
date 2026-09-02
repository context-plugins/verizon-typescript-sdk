import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionIdSchema, type ActionId } from "./action-id.js";
import { awarenessDistanceSchema, type AwarenessDistance } from "./awareness-distance.js";
import { eventPositionSchema, type EventPosition } from "./event-position.js";

export type Management = {
  actionId: ActionId;
  detectionTime: number;
  referenceTime: number;
  eventPosition: EventPosition;
  awarenessDistance?: AwarenessDistance;
  stationType: number;
};

export const managementSchema: Schema<Management> = s.object<Management>({
  actionId: actionIdSchema,
  detectionTime: s.number(),
  referenceTime: s.number(),
  eventPosition: eventPositionSchema,
  awarenessDistance: s.optional(s.lazy(() => awarenessDistanceSchema)),
  stationType: s.number(),
});
