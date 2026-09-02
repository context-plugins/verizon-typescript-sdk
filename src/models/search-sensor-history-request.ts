import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

export type SearchSensorHistoryRequest = {
  accountidentifier: AccountIdentifier;
  resourceidentifier: ResourceIdentifier;
  limitnumber?: number;
  page?: string;
};

export const searchSensorHistoryRequestSchema: Schema<SearchSensorHistoryRequest> =
  s.object<SearchSensorHistoryRequest>({
    accountidentifier: accountIdentifierSchema,
    resourceidentifier: resourceIdentifierSchema,
    limitnumber: s.optional(s.number()),
    page: s.optional(s.string()),
    _keysMap: {
      limitnumber: "$limitnumber",
      page: "$page",
    },
  });
