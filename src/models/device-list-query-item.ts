import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The list of devices in the account. */
export type DeviceListQueryItem = {
  /** Device IMEI. */
  deviceId?: string;
  /** The MDN (phone number) of the device. */
  mdn?: string;
  /** The device model name. */
  model?: string;
  /** The device make. */
  make?: string;
  /** The name of the firmware image currently installed on the device. */
  firmware?: string;
  /**
   * True if the device firmware can be upgraded over the air using the Software Management Services
   * API.
   */
  fotaEligible?: boolean;
  /** True if an MRC license has been assigned to this device. */
  licenseAssigned?: boolean;
  /**
   * The date and time that the device firmware was last upgraded. If a device has never been
   * upgraded, the upgradeTime will be 01/01/1900 0:0:0.
   */
  upgradeTime?: string;
};

export const deviceListQueryItemSchema: Schema<DeviceListQueryItem> = s.object<DeviceListQueryItem>({
  deviceId: s.optional(s.string()),
  mdn: s.optional(s.string()),
  model: s.optional(s.string()),
  make: s.optional(s.string()),
  firmware: s.optional(s.string()),
  fotaEligible: s.optional(s.boolean()),
  licenseAssigned: s.optional(s.boolean()),
  upgradeTime: s.optional(s.string()),
});
