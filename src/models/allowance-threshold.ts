import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AllowanceThreshold = {
  percentage50?: boolean;
  percentage75?: boolean;
  percentage90?: boolean;
  percentage100?: boolean;
};

export const allowanceThresholdSchema: Schema<AllowanceThreshold> = s.object<AllowanceThreshold>({
  percentage50: s.optional(s.boolean()),
  percentage75: s.optional(s.boolean()),
  percentage90: s.optional(s.boolean()),
  percentage100: s.optional(s.boolean()),
});
