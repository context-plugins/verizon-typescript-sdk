import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CarrierServicePlan = {
  name?: string;
  code?: string;
  sizeKb?: string;
  carrierServicePlanCode?: string;
};

export const carrierServicePlanSchema: Schema<CarrierServicePlan> = s.object<CarrierServicePlan>({
  name: s.optional(s.string()),
  code: s.optional(s.string()),
  sizeKb: s.optional(s.string()),
  carrierServicePlanCode: s.optional(s.string()),
});
