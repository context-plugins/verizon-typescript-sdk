import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numericalDataUnitSchema, type NumericalDataUnit } from "./numerical-data-unit.js";

/** Describes value and unit of time. */
export type NumericalData = {
  /** Numerical value. */
  value?: number;
  /** Unit of time. */
  unit?: NumericalDataUnit;
};

export const numericalDataSchema: Schema<NumericalData> = s.object<NumericalData>({
  value: s.optional(s.int()),
  unit: s.optional(s.lazy(() => numericalDataUnitSchema)),
});
