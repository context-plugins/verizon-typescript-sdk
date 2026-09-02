import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { causeCodeChoiceSchema, type CauseCodeChoice } from "./unions/cause-code-choice.js";

export type EventType = {
  ccAndScc?: CauseCodeChoice;
};

export const eventTypeSchema: Schema<EventType> = s.object<EventType>({
  ccAndScc: s.optional(s.lazy(() => causeCodeChoiceSchema)),
});
