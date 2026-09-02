import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveAnomalyIndicator = {
  active?: boolean;
};

export const activeAnomalyIndicatorSchema: Schema<ActiveAnomalyIndicator> = s.object<ActiveAnomalyIndicator>({
  active: s.optional(s.boolean()),
});
