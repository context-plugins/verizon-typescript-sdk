import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import { resourceIdentifierSchema, type ResourceIdentifier } from "./resource-identifier.js";

export type SearchDeviceEventHistoryRequest = {
  accountidentifier: AccountIdentifier;
  selection?: Record<string, string>;
  resourceidentifier: ResourceIdentifier;
  limitnumber?: number;
  page?: string;
};

export const searchDeviceEventHistoryRequestSchema: Schema<SearchDeviceEventHistoryRequest> =
  s.object<SearchDeviceEventHistoryRequest>({
    accountidentifier: accountIdentifierSchema,
    selection: s.optional(s.record(s.string(), s.string())),
    resourceidentifier: resourceIdentifierSchema,
    limitnumber: s.optional(s.number()),
    page: s.optional(s.string()),
    _keysMap: {
      selection: "$selection",
      limitnumber: "$limitnumber",
      page: "$page",
    },
  });
