import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { numericalDataSchema, type NumericalData } from "./numerical-data.js";

/**
 * The time period for which a request should retrieve data, beginning with the limitTime.startOn
 * and proceeding with the limitTime.duration.
 */
export type HistorySearchLimitTime = {
  /** The starting date-time for this request. */
  startOn?: Date;
  /** Describes value and unit of time. */
  duration?: NumericalData;
};

export const historySearchLimitTimeSchema: Schema<HistorySearchLimitTime> = s.object<HistorySearchLimitTime>({
  startOn: s.optional(s.dateTime()),
  duration: s.optional(s.lazy(() => numericalDataSchema)),
});
