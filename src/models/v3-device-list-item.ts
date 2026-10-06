import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device changed. */
export type V3DeviceListItem = {
  /** Device IMEI. */
  deviceId?: string;
  /** Success or failure. */
  status?: string;
  /** Result reason. */
  reason?: string;
};

export const v3DeviceListItemSchema: Schema<V3DeviceListItem> = s.object<V3DeviceListItem>({
  deviceId: s.optional(s.string()),
  status: s.optional(s.string()),
  reason: s.optional(s.string()),
  _keysMap: {
    reason: "Reason",
  },
});
