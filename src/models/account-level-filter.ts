import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountnamesSchema, type Accountnames } from "./accountnames.js";

export type AccountLevelFilter = {
  /**
   * Determines whether or not to aggregate usage of multiple accounts together, or separate by
   * account. If this is null or not present, then the trigger will be for an individual line.
   */
  separateOrCombined?: string;
  accountNames?: Accountnames;
};

export const accountLevelFilterSchema: Schema<AccountLevelFilter> = s.object<AccountLevelFilter>({
  separateOrCombined: s.optional(s.string()),
  accountNames: s.optional(s.lazy(() => accountnamesSchema)),
});
