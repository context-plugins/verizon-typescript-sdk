import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayAsYouGoFilterCriteria1 = {
  carrierServicePlanCode?: string;
  accountNameList?: string[];
};

export const payAsYouGoFilterCriteria1Schema: Schema<PayAsYouGoFilterCriteria1> =
  s.object<PayAsYouGoFilterCriteria1>({
    carrierServicePlanCode: s.optional(s.string()),
    accountNameList: s.optional(s.array(s.string())),
  });
