import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AccountIdentifier = {
  billingaccountid?: string;
};

export const accountIdentifierSchema: Schema<AccountIdentifier> = s.object<AccountIdentifier>({
  billingaccountid: s.optional(s.string()),
});
