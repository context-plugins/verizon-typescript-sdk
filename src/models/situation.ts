import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

/**
 * This represents the situation container describing the event and the reliability of the detection
 * source.
 */
export type Situation = {
  /**
   * The quality or reliability level of the information provided by the ITS-S application of the
   * originating ITS-S.
   */
  informationQuality: number;
  /** The type of event including direct and sub cause. */
  eventType: EventType;
};

export const situationSchema: Schema<Situation> = s.object<Situation>({
  informationQuality: s.int(),
  eventType: eventTypeSchema,
});
