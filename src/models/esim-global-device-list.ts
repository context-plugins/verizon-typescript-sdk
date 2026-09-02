import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileStatusFilterSchema, type ProfileStatusFilter } from "./profile-status-filter.js";
import {
  provisioningStatusFilterSchema,
  type ProvisioningStatusFilter,
} from "./provisioning-status-filter.js";
import { deviceFilter1Schema, type DeviceFilter1 } from "./unions/device-filter1.js";

export type ESimGlobalDeviceList = {
  accountName?: string;
  provisioningStatusFilter?: ProvisioningStatusFilter;
  profileStatusFilter?: ProfileStatusFilter;
  carrierNameFilter?: string;
  deviceFilter?: DeviceFilter1[];
};

export const eSimGlobalDeviceListSchema: Schema<ESimGlobalDeviceList> = s.object<ESimGlobalDeviceList>({
  accountName: s.optional(s.string()),
  provisioningStatusFilter: s.optional(s.lazy(() => provisioningStatusFilterSchema)),
  profileStatusFilter: s.optional(s.lazy(() => profileStatusFilterSchema)),
  carrierNameFilter: s.optional(s.string()),
  deviceFilter: s.optional(s.array(s.lazy(() => deviceFilter1Schema))),
});
