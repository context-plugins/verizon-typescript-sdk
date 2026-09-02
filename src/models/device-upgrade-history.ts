import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceUpgradeHistory = {
  deviceId?: string;
  id?: string;
  accountName?: string;
  firmwareFrom?: string;
  firmwareTo?: string;
  startDate?: string;
  upgradeStartTime?: string;
  status?: string;
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
