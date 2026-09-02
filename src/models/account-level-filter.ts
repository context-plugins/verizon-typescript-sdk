import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountnamesSchema, type Accountnames } from "./accountnames.js";

export type AccountLevelFilter = {
  separateOrCombined?: string;
  accountNames?: Accountnames;
};

export const accountLevelFilterSchema: Schema<AccountLevelFilter> = s.object<AccountLevelFilter>({
  separateOrCombined: s.optional(s.string()),
  accountNames: s.optional(s.lazy(() => accountnamesSchema)),
});
