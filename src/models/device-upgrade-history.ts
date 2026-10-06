import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Firmware upgrade information. */
export type DeviceUpgradeHistory = {
  /** Device IMEI. */
  deviceId?: string;
  /** The unique identifier for the upgrade. */
  id?: string;
  /** The name (number) of the billing account that the device belongs to. */
  accountName?: string;
  /** The firmware version that was on the device before the upgrade. */
  firmwareFrom?: string;
  /** The name of the firmware version that was on the device after the upgrade. */
  firmwareTo?: string;
  /** The date of the upgrade. */
  startDate?: string;
  /** The date and time that the upgrade actually started for this device. */
  upgradeStartTime?: string;
  /** The status of the upgrade for this device. */
  status?: string;
  /** More information about the status. */
  reason?: string;
};

export const deviceUpgradeHistorySchema: Schema<DeviceUpgradeHistory> = s.object<DeviceUpgradeHistory>({
  deviceId: s.optional(s.string()),
  id: s.optional(s.string()),
  accountName: s.optional(s.string()),
  firmwareFrom: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  startDate: s.optional(s.string()),
  upgradeStartTime: s.optional(s.string()),
  status: s.optional(s.string()),
  reason: s.optional(s.string()),
});
