import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";

/** Authenticating account ID. */
export type GenerateExternalIdRequest = {
  /**
   * The ID of the authenticating billing account, in the format
   * `{"billingaccountid":"1234567890-12345"}`.
   */
  accountidentifier?: AccountIdentifier;
};

export const generateExternalIdRequestSchema: Schema<GenerateExternalIdRequest> =
  s.object<GenerateExternalIdRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
  });
