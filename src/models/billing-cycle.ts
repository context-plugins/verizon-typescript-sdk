import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BillingCycle = {
  year?: string;
  month?: string;
};

export const billingCycleSchema: Schema<BillingCycle> = s.object<BillingCycle>({
  year: s.optional(s.string()),
  month: s.optional(s.string()),
});
