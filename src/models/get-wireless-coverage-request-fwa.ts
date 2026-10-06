import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationsSchema, type Locations } from "./locations.js";
import { networkTypeObjectSchema, type NetworkTypeObject } from "./network-type-object.js";

/** Get wireless coverage FWA. */
export type GetWirelessCoverageRequestFwa = {
  /** Account name. */
  accountName: string;
  /** Type of request made. FWA for address qualification and NW for Nationwide coverage. */
  requestType: string;
  /** Type of location detail. */
  locationType: string;
  locations: Locations;
  networkTypesList: NetworkTypeObject[];
};

export const getWirelessCoverageRequestFwaSchema: Schema<GetWirelessCoverageRequestFwa> =
  s.object<GetWirelessCoverageRequestFwa>({
    accountName: s.string(),
    requestType: s.string(),
    locationType: s.string(),
    locations: locationsSchema,
    networkTypesList: s.array(s.lazy(() => networkTypeObjectSchema)),
  });
