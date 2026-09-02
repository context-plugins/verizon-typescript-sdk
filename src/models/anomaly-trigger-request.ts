import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnomalyTriggerRequest = {
  accountNames?: string;
  includeAbnormal?: boolean;
  includeVeryAbnormal?: boolean;
  includeUnderExpectedUsage?: boolean;
  includeOverExpectedUsage?: boolean;
};

export const anomalyTriggerRequestSchema: Schema<AnomalyTriggerRequest> = s.object<AnomalyTriggerRequest>({
  accountNames: s.optional(s.string()),
  includeAbnormal: s.optional(s.boolean()),
  includeVeryAbnormal: s.optional(s.boolean()),
  includeUnderExpectedUsage: s.optional(s.boolean()),
  includeOverExpectedUsage: s.optional(s.boolean()),
});
