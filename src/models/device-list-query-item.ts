import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceListQueryItem = {
  deviceId?: string;
  mdn?: string;
  model?: string;
  make?: string;
  firmware?: string;
  fotaEligible?: boolean;
  licenseAssigned?: boolean;
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
