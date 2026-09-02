import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CycleType = {
  Cycleone: "cycleone",
  Cycletwo: "cycletwo",
} as const;
export type CycleType = (typeof CycleType)[keyof typeof CycleType] | (string & {});

export const cycleTypeSchema: EnumSchema<CycleType> = s.enumOf<CycleType>(CycleType);
