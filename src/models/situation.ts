import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

export type Situation = {
  informationQuality: number;
  eventType: EventType;
};

export const situationSchema: Schema<Situation> = s.object<Situation>({
  informationQuality: s.number(),
  eventType: eventTypeSchema,
});
