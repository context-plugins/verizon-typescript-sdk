import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

export type DeleteSubscriptionRequest = {
  accountidentifier?: AccountIdentifier;
  resourceidentifier?: ResourceIdentifier;
};

export const deleteSubscriptionRequestSchema: Schema<DeleteSubscriptionRequest> =
  s.object<DeleteSubscriptionRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
    resourceidentifier: s.optional(s.lazy(() => resourceIdentifierSchema)),
  });
