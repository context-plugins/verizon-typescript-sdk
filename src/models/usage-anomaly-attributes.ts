import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsageAnomalyAttributes = {
  accountNames?: string;
  deviceGroup?: string;
  includeAbnormal?: boolean;
  includeVeryAbnormal?: boolean;
  includeUnderExpectedUsage?: boolean;
  includeOverExpectedUsage?: boolean;
};

export const usageAnomalyAttributesSchema: Schema<UsageAnomalyAttributes> = s.object<UsageAnomalyAttributes>({
  accountNames: s.optional(s.string()),
  deviceGroup: s.optional(s.string()),
  includeAbnormal: s.optional(s.boolean()),
  includeVeryAbnormal: s.optional(s.boolean()),
  includeUnderExpectedUsage: s.optional(s.boolean()),
  includeOverExpectedUsage: s.optional(s.boolean()),
});
