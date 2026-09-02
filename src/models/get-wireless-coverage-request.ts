import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationscoordSchema, type Locationscoord } from "./locationscoord.js";
import { networkTypeObjectSchema, type NetworkTypeObject } from "./network-type-object.js";

export type GetWirelessCoverageRequest = {
  accountName: string;
  requestType: string;
  locationType: string;
  locations: Locationscoord;
  networkTypesList: NetworkTypeObject[];
};

export const getWirelessCoverageRequestSchema: Schema<GetWirelessCoverageRequest> =
  s.object<GetWirelessCoverageRequest>({
    accountName: s.string(),
    requestType: s.string(),
    locationType: s.string(),
    locations: locationscoordSchema,
    networkTypesList: s.array(s.lazy(() => networkTypeObjectSchema)),
  });
