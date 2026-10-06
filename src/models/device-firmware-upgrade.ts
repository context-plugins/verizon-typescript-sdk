import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Firmware upgrades information. */
export type DeviceFirmwareUpgrade = {
  /** Device identifier. */
  deviceId: string;
  /** Campaign identifier. */
  campaignId: string;
  /** Account identifier. */
  accountName: string;
  /** Firmware name. */
  firmwareName?: string;
  /** Old firmware version. */
  firmwareFrom?: string;
  /** New firmware version. */
  firmwareTo?: string;
  /** Firmware upgrade start date. */
  startDate: string;
  /** Firmware upgrade status. */
  status: string;
  /** Software upgrade result reason. */
  reason: string;
  /** Report updated time. */
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
