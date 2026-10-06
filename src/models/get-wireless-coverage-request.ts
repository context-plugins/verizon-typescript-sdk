import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationscoordSchema, type Locationscoord } from "./locationscoord.js";
import { networkTypeObjectSchema, type NetworkTypeObject } from "./network-type-object.js";

/** Get wireless coverage. */
export type GetWirelessCoverageRequest = {
  /** Account name. */
  accountName: string;
  /** Type of request made. FWA for address qualification and NW for Nationwide coverage. */
  requestType: string;
  /** Type of location detail. */
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
