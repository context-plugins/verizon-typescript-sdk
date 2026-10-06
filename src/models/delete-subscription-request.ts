import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

/** The subscription to delete. */
export type DeleteSubscriptionRequest = {
  /**
   * The ID of the authenticating billing account, in the format
   * `{"billingaccountid":"1234567890-12345"}`.
   */
  accountidentifier?: AccountIdentifier;
  /**
   * The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}.
   */
  resourceidentifier?: ResourceIdentifier;
};

export const deleteSubscriptionRequestSchema: Schema<DeleteSubscriptionRequest> =
  s.object<DeleteSubscriptionRequest>({
    accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
    resourceidentifier: s.optional(s.lazy(() => resourceIdentifierSchema)),
  });
