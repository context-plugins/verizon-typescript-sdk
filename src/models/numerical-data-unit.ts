import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NumericalDataUnit = {
  Second: "SECOND",
  Minute: "MINUTE",
  Hour: "HOUR",
  Day: "DAY",
} as const;
export type NumericalDataUnit = (typeof NumericalDataUnit)[keyof typeof NumericalDataUnit] | (string & {});

export const numericalDataUnitSchema: EnumSchema<NumericalDataUnit> =
  s.enumOf<NumericalDataUnit>(NumericalDataUnit);
