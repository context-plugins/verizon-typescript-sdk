import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { causeCodeChoiceSchema, type CauseCodeChoice } from "./unions/cause-code-choice.js";

/** The type of event including direct and sub cause. */
export type EventType = {
  /**
   * The main cause of a detected event. Each entry is of a different type and represents the sub
   * cause code.
   */
  ccAndScc?: CauseCodeChoice;
};

export const eventTypeSchema: Schema<EventType> = s.object<EventType>({
  ccAndScc: s.optional(s.lazy(() => causeCodeChoiceSchema)),
});
