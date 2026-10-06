import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { thresholdUnitSchema, type ThresholdUnit } from "./threshold-unit.js";

export type Suspenddetailsobject = {
  suspendFromAccounts?: string[];
  suspendDuration?: number;
  suspendOption?: string;
  /** The threshold value the trigger monitors for */
  threshold?: number;
  /** The units of the threshold. This can be KB, Kilobits, MB, Megabits, or GB, Gigabits */
  thresholdUnit?: ThresholdUnit;
};

export const suspenddetailsobjectSchema: Schema<Suspenddetailsobject> = s.object<Suspenddetailsobject>({
  suspendFromAccounts: s.optional(s.array(s.string())),
  suspendDuration: s.optional(s.int()),
  suspendOption: s.optional(s.string()),
  threshold: s.optional(s.int()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
});
