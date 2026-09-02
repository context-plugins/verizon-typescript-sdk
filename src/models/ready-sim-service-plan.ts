import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReadySimServicePlan = {
  servicePlan?: string;
};

export const readySimServicePlanSchema: Schema<ReadySimServicePlan> = s.object<ReadySimServicePlan>({
  servicePlan: s.optional(s.string()),
});
