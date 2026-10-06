import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilterCriteria1 = {
  carrierServicePlanCode?: string;
  /** An array of account names */
  accountNameList?: string[];
};

export const filterCriteria1Schema: Schema<FilterCriteria1> = s.object<FilterCriteria1>({
  carrierServicePlanCode: s.optional(s.string()),
  accountNameList: s.optional(s.array(s.string())),
});
