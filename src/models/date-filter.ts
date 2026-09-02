import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DateFilter = {
  earliest: string;
  latest: string;
};

export const dateFilterSchema: Schema<DateFilter> = s.object<DateFilter>({
  earliest: s.string(),
  latest: s.string(),
});
