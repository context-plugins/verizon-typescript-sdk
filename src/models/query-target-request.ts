import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

/** Search for targets by property values. */
export type QueryTargetRequest = {
  /**
   * The ID of the authenticating billing account, in the format
   * `{"billingaccountid":"1234567890-12345"}`.
   */
  accountidentifier?: AccountIdentifier;
  /**
   * A comma-separated list of properties and comparator values to match against subscriptions in
   * the ThingSpace account. See Working with Query Filters for more information. If the request
   * does not include `$selection`, the response will include all subscriptions to which the
   * requesting user has access.
   */
  selection?: Record<string, string>;
  /**
   * The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}.
   */
  resourceidentifier?: ResourceIdentifier;
};

export const queryTargetRequestSchema: Schema<QueryTargetRequest> = s.object<QueryTargetRequest>({
  accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
  selection: s.optional(s.record(s.string(), s.string())),
  resourceidentifier: s.optional(s.lazy(() => resourceIdentifierSchema)),
  _keysMap: {
    selection: "$selection",
  },
});
