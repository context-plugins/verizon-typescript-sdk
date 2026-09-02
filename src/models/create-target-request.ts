import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import {
  createTargetRequestFieldsSchema,
  type CreateTargetRequestFields,
} from "./create-target-request-fields.js";
import { targetAuthenticationSchema, type TargetAuthentication } from "./target-authentication.js";

export type CreateTargetRequest = {
  accountidentifier?: AccountIdentifier;
  billingaccountid?: string;
  kind?: string;
  address?: string;
  addressscheme?: string;
  fields?: CreateTargetRequestFields;
  description?: string;
  externalid?: string;
  name?: string;
  region?: string;
  key1?: string;
  oauth?: TargetAuthentication;
};

export const createTargetRequestSchema: Schema<CreateTargetRequest> = s.object<CreateTargetRequest>({
  accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
  billingaccountid: s.optional(s.string()),
  kind: s.optional(s.string()),
  address: s.optional(s.string()),
  addressscheme: s.optional(s.string()),
  fields: s.optional(s.lazy(() => createTargetRequestFieldsSchema)),
  description: s.optional(s.string()),
  externalid: s.optional(s.string()),
  name: s.optional(s.string()),
  region: s.optional(s.string()),
  key1: s.optional(s.string()),
  oauth: s.optional(s.lazy(() => targetAuthenticationSchema)),
});
