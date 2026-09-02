import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payAsYouGoFilterCriteria1Schema,
  type PayAsYouGoFilterCriteria1,
} from "./pay-as-you-go-filter-criteria1.js";

export type PayAsYouGoFilterCriteria = {
  filterCriteria?: PayAsYouGoFilterCriteria1;
};

export const payAsYouGoFilterCriteriaSchema: Schema<PayAsYouGoFilterCriteria> =
  s.object<PayAsYouGoFilterCriteria>({
    filterCriteria: s.optional(s.lazy(() => payAsYouGoFilterCriteria1Schema)),
  });
