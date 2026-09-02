import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceFirmwareUpgrade = {
  deviceId: string;
  campaignId: string;
  accountName: string;
  firmwareName?: string;
  firmwareFrom?: string;
  firmwareTo?: string;
  startDate: string;
  status: string;
  reason: string;
  reportUpdatedTime?: string;
};

export const deviceFirmwareUpgradeSchema: Schema<DeviceFirmwareUpgrade> = s.object<DeviceFirmwareUpgrade>({
  deviceId: s.string(),
  campaignId: s.string(),
  accountName: s.string(),
  firmwareName: s.optional(s.string()),
  firmwareFrom: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  startDate: s.dateOnly(),
  status: s.string(),
  reason: s.string(),
  reportUpdatedTime: s.optional(s.string()),
});
