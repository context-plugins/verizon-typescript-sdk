import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountShareFilterCriteria1Schema,
  type AccountShareFilterCriteria1,
} from "./account-share-filter-criteria1.js";

export type AccountShareFilterCriteria = {
  filterCriteria?: AccountShareFilterCriteria1;
};

export const accountShareFilterCriteriaSchema: Schema<AccountShareFilterCriteria> =
  s.object<AccountShareFilterCriteria>({
    filterCriteria: s.optional(s.lazy(() => accountShareFilterCriteria1Schema)),
  });
