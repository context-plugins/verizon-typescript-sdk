import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountGroupShareFilter = {
  ratePlanGroupId?: number;
};

export const accountGroupShareFilterSchema: Schema<AccountGroupShareFilter> =
  s.object<AccountGroupShareFilter>({
    ratePlanGroupId: s.optional(s.number()),
  });
