import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccuracyMode = {
  _0: "0",
} as const;
export type AccuracyMode = (typeof AccuracyMode)[keyof typeof AccuracyMode] | (string & {});

export const accuracyModeSchema: EnumSchema<AccuracyMode> = s.enumOf<AccuracyMode>(AccuracyMode);
