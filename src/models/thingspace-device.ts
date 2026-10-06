import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierInformationSchema, type CarrierInformation } from "./carrier-information.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

/** Device that exist in Verizon Mobile Device Management (MDM). */
export type ThingspaceDevice = {
  /** The billing account that the device is associated with. */
  accountName?: string;
  /** The date that the device's current billing cycle ends. */
  billingCycleEndDate?: string;
  /** The carrier information associated with the device. */
  carrierInformations?: CarrierInformation[];
  /** True if the device is connected; false if it is not. */
  connected?: boolean;
  /** The date and time that the device was added to the system. */
  createdAt?: string;
  /** The custom fields and values that have been set for the device. */
  customFields?: CustomFields[];
  /** All identifiers for the device. */
  deviceIds?: DeviceId[];
  /**
   * Any extended attributes for the device, as Key and Value pairs. The pairs listed below are
   * returned as part of the response for a single device, but are not included if the request was
   * for information about multiple devices.
   */
  extendedAttributes?: CustomFields[];
  /** The device groups that the device belongs to. */
  groupNames?: (string | null)[];
  /** The IP address of the device. */
  ipAddress?: string;
  /** The user who last activated the device. */
  lastActivationBy?: string;
  /** The date and time that the device was last activated. */
  lastActivationDate?: string;
  /** The most recent connection date and time. */
  lastConnectionDate?: string;
};

export const thingspaceDeviceSchema: Schema<ThingspaceDevice> = s.object<ThingspaceDevice>({
  accountName: s.optional(s.string()),
  billingCycleEndDate: s.optional(s.string()),
  carrierInformations: s.optional(s.array(s.lazy(() => carrierInformationSchema))),
  connected: s.optional(s.boolean()),
  createdAt: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  groupNames: s.optional(s.array(s.nullable(s.string()))),
  ipAddress: s.optional(s.string()),
  lastActivationBy: s.optional(s.string()),
  lastActivationDate: s.optional(s.string()),
  lastConnectionDate: s.optional(s.string()),
});
