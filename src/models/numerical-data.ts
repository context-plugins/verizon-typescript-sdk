import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numericalDataUnitSchema, type NumericalDataUnit } from "./numerical-data-unit.js";

export type NumericalData = {
  value?: number;
  unit?: NumericalDataUnit;
};

export const numericalDataSchema: Schema<NumericalData> = s.object<NumericalData>({
  value: s.optional(s.number()),
  unit: s.optional(s.lazy(() => numericalDataUnitSchema)),
});
