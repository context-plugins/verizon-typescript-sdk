import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Filter out the dates. */
export type DateFilter = {
  /** Only include devices that were added after this date and time. */
  earliest: string;
  /** Only include devices that were added before this date and time. */
  latest: string;
};

export const dateFilterSchema: Schema<DateFilter> = s.object<DateFilter>({
  earliest: s.string(),
  latest: s.string(),
});
