import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

export type QuerySubscriptionRequest = {
  accountidentifier?: AccountIdentifier;
  selection?: Record<string, string>;
  resourceidentifier?: ResourceIdentifier;
};

export const querySubscriptionRequestSchema: Schema<QuerySubscriptionRequest> =
  s.object<QuerySubscriptionRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
    selection: s.optional(s.record(s.string(), s.string())),
    resourceidentifier: s.optional(s.lazy(() => resourceIdentifierSchema)),
    _keysMap: {
      selection: "$selection",
    },
  });
