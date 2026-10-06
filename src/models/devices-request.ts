import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./unions/filter.js";

/** Request body for retrieving devices based on vendorID and optional filters */
export type DevicesRequest = {
  /** The ID the vendor wants its devices to be registered under. E.g. Verizon, GM, Ford, etc. */
  vendorId: string;
  /** Devices filter criteria or pagination token */
  filter?: Filter;
};

export const devicesRequestSchema: Schema<DevicesRequest> = s.object<DevicesRequest>({
  vendorId: s.string(),
  filter: s.optional(s.lazy(() => filterSchema)),
  _keysMap: {
    vendorId: "VendorId",
    filter: "Filter",
  },
});
