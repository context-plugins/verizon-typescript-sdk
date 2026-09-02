import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type PeriodicReporting = {
  unit?: Unit;
  hours?: number;
  minutes?: number;
};

export const periodicReportingSchema: Schema<PeriodicReporting> = s.object<PeriodicReporting>({
  unit: s.optional(s.lazy(() => unitSchema)),
  hours: s.optional(s.number()),
  minutes: s.optional(s.number()),
});
