import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountGroupShareFilterCriteriaSchema,
  type AccountGroupShareFilterCriteria,
} from "./account-group-share-filter-criteria.js";

export type AccountGroupShareIndividual1 = {
  accountGroupShareIndividual?: AccountGroupShareFilterCriteria;
};

export const accountGroupShareIndividual1Schema: Schema<AccountGroupShareIndividual1> =
  s.object<AccountGroupShareIndividual1>({
    accountGroupShareIndividual: s.optional(s.lazy(() => accountGroupShareFilterCriteriaSchema)),
  });
