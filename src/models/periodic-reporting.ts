import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

/** The units and values of the time interval for the sensor to send a report */
export type PeriodicReporting = {
  unit?: Unit;
  /** whole numbers from 0 to 24 */
  hours?: number;
  /** whole numbers from 0 to 59 */
  minutes?: number;
};

export const periodicReportingSchema: Schema<PeriodicReporting> = s.object<PeriodicReporting>({
  unit: s.optional(s.lazy(() => unitSchema)),
  hours: s.optional(s.int()),
  minutes: s.optional(s.int()),
});
