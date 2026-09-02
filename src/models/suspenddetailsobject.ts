import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { thresholdUnitSchema, type ThresholdUnit } from "./threshold-unit.js";

export type Suspenddetailsobject = {
  suspendFromAccounts?: string[];
  suspendDuration?: number;
  suspendOption?: string;
  threshold?: number;
  thresholdUnit?: ThresholdUnit;
};

export const suspenddetailsobjectSchema: Schema<Suspenddetailsobject> = s.object<Suspenddetailsobject>({
  suspendFromAccounts: s.optional(s.array(s.string())),
  suspendDuration: s.optional(s.number()),
  suspendOption: s.optional(s.string()),
  threshold: s.optional(s.number()),
  thresholdUnit: s.optional(s.lazy(() => thresholdUnitSchema)),
});
