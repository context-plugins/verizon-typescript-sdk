import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numericalDataSchema, type NumericalData } from "./numerical-data.js";

export type HistorySearchLimitTime = {
  startOn?: Date;
  duration?: NumericalData;
};

export const historySearchLimitTimeSchema: Schema<HistorySearchLimitTime> = s.object<HistorySearchLimitTime>({
  startOn: s.optional(s.dateTime()),
  duration: s.optional(s.lazy(() => numericalDataSchema)),
});
