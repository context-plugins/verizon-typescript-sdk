import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceSoftwareUpgrade = {
  deviceId: string;
  id: string;
  accountName: string;
  softwareName?: string;
  startDate: string;
  status: string;
  reason: string;
};

export const deviceSoftwareUpgradeSchema: Schema<DeviceSoftwareUpgrade> = s.object<DeviceSoftwareUpgrade>({
  deviceId: s.string(),
  id: s.string(),
  accountName: s.string(),
  softwareName: s.optional(s.string()),
  startDate: s.dateOnly(),
  status: s.string(),
  reason: s.string(),
});
