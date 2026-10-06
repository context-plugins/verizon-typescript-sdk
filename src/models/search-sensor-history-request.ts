import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

/** Search Device By Property resource definition. */
export type SearchSensorHistoryRequest = {
  /**
   * The ID of the authenticating billing account, in the format
   * `{"billingaccountid":"1234567890-12345"}`.
   */
  accountidentifier: AccountIdentifier;
  /**
   * The ID of the target to delete, in the format {"id": "dd1682d3-2d80-cefc-f3ee-25154800beff"}.
   */
  resourceidentifier: ResourceIdentifier;
  /** The maximum number of events to include in the response. */
  limitnumber?: number;
  /** The maximum number of events to include in the response. */
  page?: string;
};

export const searchSensorHistoryRequestSchema: Schema<SearchSensorHistoryRequest> =
  s.object<SearchSensorHistoryRequest>({
    accountidentifier: accountIdentifierSchema,
    resourceidentifier: resourceIdentifierSchema,
    limitnumber: s.optional(s.int()),
    page: s.optional(s.string()),
    _keysMap: {
      limitnumber: "$limitnumber",
      page: "$page",
    },
  });
