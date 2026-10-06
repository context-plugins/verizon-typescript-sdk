import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action taken when trigger conditions are met */
export const AccountLevelAction = {
  Notify: "notify",
  Suspend: "suspend",
  ChangePricePlan: "changePricePlan",
} as const;
export type AccountLevelAction = (typeof AccountLevelAction)[keyof typeof AccountLevelAction] | (string & {});

export const accountLevelActionSchema: EnumSchema<AccountLevelAction> =
  s.enumOf<AccountLevelAction>(AccountLevelAction);
