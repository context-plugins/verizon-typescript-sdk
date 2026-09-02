import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FirmwareUpgradeDeviceListItem = {
  deviceId?: string;
  status?: string;
  resultReason?: string;
};

export const firmwareUpgradeDeviceListItemSchema: Schema<FirmwareUpgradeDeviceListItem> =
  s.object<FirmwareUpgradeDeviceListItem>({
    deviceId: s.optional(s.string()),
    status: s.optional(s.string()),
    resultReason: s.optional(s.string()),
  });
