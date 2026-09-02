import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { triggervaluesSchema, type Triggervalues } from "./triggervalues.js";

export type TriggerValueResponse = {
  triggers?: Triggervalues[];
};

export const triggerValueResponseSchema: Schema<TriggerValueResponse> = s.object<TriggerValueResponse>({
  triggers: s.optional(s.array(s.lazy(() => triggervaluesSchema))),
});
