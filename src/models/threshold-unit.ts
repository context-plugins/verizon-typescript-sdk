import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThresholdUnit = {
  Kb: "KB",
  Mb: "MB",
  Gb: "GB",
} as const;
export type ThresholdUnit = (typeof ThresholdUnit)[keyof typeof ThresholdUnit] | (string & {});

export const thresholdUnitSchema: EnumSchema<ThresholdUnit> = s.enumOf<ThresholdUnit>(ThresholdUnit);
