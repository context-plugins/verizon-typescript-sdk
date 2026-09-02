import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { triggervalues2Schema, type Triggervalues2 } from "./triggervalues2.js";

export type TriggerValueResponse2 = {
  triggers?: Triggervalues2[];
};

export const triggerValueResponse2Schema: Schema<TriggerValueResponse2> = s.object<TriggerValueResponse2>({
  triggers: s.optional(s.array(s.lazy(() => triggervalues2Schema))),
});
