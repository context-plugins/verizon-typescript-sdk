import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V3DeviceListItem = {
  deviceId?: string;
  status?: string;
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
