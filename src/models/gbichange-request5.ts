import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceListWithServiceAddressSchema,
  type DeviceListWithServiceAddress,
} from "./unions/device-list-with-service-address.js";

export type GbichangeRequest5 = {
  accountName?: string;
  servicePlan?: string;
  deviceListWithServiceAddress?: DeviceListWithServiceAddress[];
  currentServicePlan?: string;
};

export const gbichangeRequest5Schema: Schema<GbichangeRequest5> = s.object<GbichangeRequest5>({
  accountName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  deviceListWithServiceAddress: s.optional(s.array(s.lazy(() => deviceListWithServiceAddressSchema))),
  currentServicePlan: s.optional(s.string()),
});
