import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowanceThresholdSchema, type AllowanceThreshold } from "./allowance-threshold.js";

export type Carriercode1 = {
  carrierCode?: string;
  percentage?: AllowanceThreshold;
};

export const carriercode1Schema: Schema<Carriercode1> = s.object<Carriercode1>({
  carrierCode: s.optional(s.string()),
  percentage: s.optional(s.lazy(() => allowanceThresholdSchema)),
});
