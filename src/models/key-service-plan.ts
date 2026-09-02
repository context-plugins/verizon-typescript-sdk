import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeyServicePlan = {
  key?: string;
};

export const keyServicePlanSchema: Schema<KeyServicePlan> = s.object<KeyServicePlan>({
  key: s.optional(s.string()),
});
