import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationsSchema, type Locations } from "./locations.js";
import { networkTypeObjectSchema, type NetworkTypeObject } from "./network-type-object.js";

export type GetWirelessCoverageRequestFwa = {
  accountName: string;
  requestType: string;
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
