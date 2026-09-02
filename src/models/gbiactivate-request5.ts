import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceListWithServiceAddress1Schema,
  type DeviceListWithServiceAddress1,
} from "./unions/device-list-with-service-address1.js";

export type GbiactivateRequest5 = {
  accountName?: string;
  servicePlan?: string;
  deviceListWithServiceAddress?: DeviceListWithServiceAddress1[];
  skuNumber?: string;
  publicIpRestriction?: string;
  carrierName?: string;
  mdnZipCode?: string;
};

export const gbiactivateRequest5Schema: Schema<GbiactivateRequest5> = s.object<GbiactivateRequest5>({
  accountName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  deviceListWithServiceAddress: s.optional(s.array(s.lazy(() => deviceListWithServiceAddress1Schema))),
  skuNumber: s.optional(s.string()),
  publicIpRestriction: s.optional(s.string()),
  carrierName: s.optional(s.string()),
  mdnZipCode: s.optional(s.string()),
});
