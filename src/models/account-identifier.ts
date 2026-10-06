import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The ID of the authenticating billing account, in the format
 * `{"billingaccountid":"1234567890-12345"}`.
 */
export type AccountIdentifier = {
  billingaccountid?: string;
};

export const accountIdentifierSchema: Schema<AccountIdentifier> = s.object<AccountIdentifier>({
  billingaccountid: s.optional(s.string()),
});
