import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterCriteria1Schema, type FilterCriteria1 } from "./filter-criteria1.js";

export type FiltercriteriaObjectCall = {
  filterCriteria?: FilterCriteria1;
};

export const filtercriteriaObjectCallSchema: Schema<FiltercriteriaObjectCall> =
  s.object<FiltercriteriaObjectCall>({
    filterCriteria: s.optional(s.lazy(() => filterCriteria1Schema)),
  });
