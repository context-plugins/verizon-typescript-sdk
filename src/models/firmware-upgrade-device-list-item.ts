import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A JSON object for each device that was included in the upgrade, showing the device IMEI, the
 * status of the upgrade, and additional information about the status.
 */
export type FirmwareUpgradeDeviceListItem = {
  /** Device IMEI. */
  deviceId?: string;
  /** The status of the upgrade for this device. */
  status?: string;
  /** Additional details about the status. Not included when status='Request Pending.' */
  resultReason?: string;
};

export const firmwareUpgradeDeviceListItemSchema: Schema<FirmwareUpgradeDeviceListItem> =
  s.object<FirmwareUpgradeDeviceListItem>({
    deviceId: s.optional(s.string()),
    status: s.optional(s.string()),
    resultReason: s.optional(s.string()),
  });
