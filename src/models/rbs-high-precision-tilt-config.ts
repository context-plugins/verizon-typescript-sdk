import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import { periodicReportingSchema, type PeriodicReporting } from "./periodic-reporting.js";
import { tscoreSchema, type Tscore } from "./tscore.js";

export type RbsHighPrecisionTiltConfig = {
  /** the reporting mode of the tilt sensor */
  mode?: Mode;
  /** The units and values of the time interval for the sensor to send a report */
  periodicReporting?: PeriodicReporting;
  /** The time the threshold condition exists, in milliseconds, to recognize an event */
  holdTime?: number;
  /** the threshold value, from verticle, to recognize an event */
  angleAway?: number;
  /** the threshold value, moving towards verticle, to recognize an event */
  angleToward?: number;
  tscore?: Tscore;
};

export const rbsHighPrecisionTiltConfigSchema: Schema<RbsHighPrecisionTiltConfig> =
  s.object<RbsHighPrecisionTiltConfig>({
    mode: s.optional(s.lazy(() => modeSchema)),
    periodicReporting: s.optional(s.lazy(() => periodicReportingSchema)),
    holdTime: s.optional(s.int()),
    angleAway: s.optional(s.int()),
    angleToward: s.optional(s.int()),
    tscore: s.optional(s.lazy(() => tscoreSchema)),
    _keysMap: {
      periodicReporting: "periodic-reporting",
      holdTime: "hold-time",
      angleAway: "angle-away",
      angleToward: "angle-toward",
    },
  });
