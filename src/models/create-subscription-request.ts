import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";

export type CreateSubscriptionRequest = {
  accountidentifier?: AccountIdentifier;
  description?: string;
  disabled?: boolean;
  email?: string;
  filter?: string;
  billingaccountid?: string;
  streamkind?: string;
  targetid?: string;
  name?: string;
  allowaggregation?: boolean;
};

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> =
  s.object<CreateSubscriptionRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
    description: s.optional(s.string()),
    disabled: s.optional(s.boolean()),
    email: s.optional(s.string()),
    filter: s.optional(s.string()),
    billingaccountid: s.optional(s.string()),
    streamkind: s.optional(s.string()),
    targetid: s.optional(s.string()),
    name: s.optional(s.string()),
    allowaggregation: s.optional(s.boolean()),
  });
