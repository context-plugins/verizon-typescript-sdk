import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./unions/filter.js";

export type DevicesRequest = {
  vendorId: string;
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
