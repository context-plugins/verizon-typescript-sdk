import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountShareFilterCriteria1 = {
  carrierServicePlanCode?: string;
  accountNameList?: string[];
};

export const accountShareFilterCriteria1Schema: Schema<AccountShareFilterCriteria1> =
  s.object<AccountShareFilterCriteria1>({
    carrierServicePlanCode: s.optional(s.string()),
    accountNameList: s.optional(s.array(s.string())),
  });
