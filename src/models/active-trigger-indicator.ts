import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveTriggerIndicator = {
  active?: boolean;
};

export const activeTriggerIndicatorSchema: Schema<ActiveTriggerIndicator> = s.object<ActiveTriggerIndicator>({
  active: s.optional(s.boolean()),
});
