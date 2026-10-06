import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Request for a carrier action. */
export type CarrierActionsRequest = {
  /** The name of a billing account. */
  accountName?: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
  /** The devices for which you want to restore service, specified by device identifier. */
  devices?: AccountDeviceList[];
  /** set to "true" to suspend with billing, set to "false" to suspend without billing */
  withBilling?: boolean;
  /** The name of a device group, if you want to restore service for all devices in that group. */
  groupName?: string;
  /**
   * The name of a service plan, if you want to only include devices that have that service plan.
   */
  servicePlan?: string;
};

export const carrierActionsRequestSchema: Schema<CarrierActionsRequest> = s.object<CarrierActionsRequest>({
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  withBilling: s.optional(s.boolean()),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});
