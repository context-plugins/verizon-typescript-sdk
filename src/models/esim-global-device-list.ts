import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileStatusFilterSchema, type ProfileStatusFilter } from "./profile-status-filter.js";
import {
  provisioningStatusFilterSchema,
  type ProvisioningStatusFilter,
} from "./provisioning-status-filter.js";
import { deviceFilter1Schema, type DeviceFilter1 } from "./unions/device-filter1.js";

export type ESimGlobalDeviceList = {
  /** The numeric name of the account. */
  accountName?: string;
  /** The last status of the device as a list filter. */
  provisioningStatusFilter?: ProvisioningStatusFilter;
  /** The last status of the device's profile as a filter. */
  profileStatusFilter?: ProfileStatusFilter;
  /** The cellular service provider. */
  carrierNameFilter?: string;
  /** An array of device identifiers to filter the list. */
  deviceFilter?: DeviceFilter1[];
};

export const eSimGlobalDeviceListSchema: Schema<ESimGlobalDeviceList> = s.object<ESimGlobalDeviceList>({
  accountName: s.optional(s.string()),
  provisioningStatusFilter: s.optional(s.lazy(() => provisioningStatusFilterSchema)),
  profileStatusFilter: s.optional(s.lazy(() => profileStatusFilterSchema)),
  carrierNameFilter: s.optional(s.string()),
  deviceFilter: s.optional(s.array(s.lazy(() => deviceFilter1Schema))),
});
