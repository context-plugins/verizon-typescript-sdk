import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Request to deactivate a carrier. */
export type CarrierDeactivateRequest = {
  /** The name of a billing account. */
  accountName: string;
  /** The devices for which you want to deactivate service, specified by device identifier. */
  devices: AccountDeviceList[];
  /**
   * Code identifying the reason for the deactivation. Currently the only valid reason code is “FF”,
   * which corresponds to General Admin/Maintenance.
   */
  reasonCode: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
  /**
   * Fees may be assessed for deactivating Verizon Wireless devices, depending on the account
   * contract. The etfWaiver parameter waives the Early Termination Fee (ETF), if applicable.
   */
  etfWaiver?: boolean;
  /** The name of a device group, if you want to deactivate all devices in that group. */
  groupName?: string;
  /**
   * The name of a service plan, if you want to only include devices that have that service plan.
   */
  servicePlan?: string;
  deleteAfterDeactivation?: boolean;
};

export const carrierDeactivateRequestSchema: Schema<CarrierDeactivateRequest> =
  s.object<CarrierDeactivateRequest>({
    accountName: s.string(),
    devices: s.array(s.lazy(() => accountDeviceListSchema)),
    reasonCode: s.string(),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    etfWaiver: s.optional(s.boolean()),
    groupName: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    deleteAfterDeactivation: s.optional(s.boolean()),
  });
