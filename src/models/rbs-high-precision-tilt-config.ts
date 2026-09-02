import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import { periodicReportingSchema, type PeriodicReporting } from "./periodic-reporting.js";
import { tscoreSchema, type Tscore } from "./tscore.js";

export type RbsHighPrecisionTiltConfig = {
  mode?: Mode;
  periodicReporting?: PeriodicReporting;
  holdTime?: number;
  angleAway?: number;
  angleToward?: number;
  tscore?: Tscore;
};

export const rbsHighPrecisionTiltConfigSchema: Schema<RbsHighPrecisionTiltConfig> =
  s.object<RbsHighPrecisionTiltConfig>({
    mode: s.optional(s.lazy(() => modeSchema)),
    periodicReporting: s.optional(s.lazy(() => periodicReportingSchema)),
    holdTime: s.optional(s.number()),
    angleAway: s.optional(s.number()),
    angleToward: s.optional(s.number()),
    tscore: s.optional(s.lazy(() => tscoreSchema)),
    _keysMap: {
      periodicReporting: "periodic-reporting",
      holdTime: "hold-time",
      angleAway: "angle-away",
      angleToward: "angle-toward",
    },
  });
