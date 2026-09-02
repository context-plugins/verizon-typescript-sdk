import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";

export type GenerateExternalIdRequest = {
  accountidentifier?: AccountIdentifier;
};

export const generateExternalIdRequestSchema: Schema<GenerateExternalIdRequest> =
  s.object<GenerateExternalIdRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
  });
