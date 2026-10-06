import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The list of devices that have licenses assigned, including the date and time of when each license
 * was assigned.
 */
export type AccountLicenseDeviceListItem = {
  /** Device IMEI. */
  deviceId?: string;
  /** Timestamp of when a license was assigned to the device. */
  assignmentTime?: Date;
};

export const accountLicenseDeviceListItemSchema: Schema<AccountLicenseDeviceListItem> =
  s.object<AccountLicenseDeviceListItem>({
    deviceId: s.optional(s.string()),
    assignmentTime: s.optional(s.dateTime()),
  });
