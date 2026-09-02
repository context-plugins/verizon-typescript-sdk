import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1DeviceListItem = {
  deviceId?: string;
  status?: string;
  reason?: string;
};

export const v1DeviceListItemSchema: Schema<V1DeviceListItem> = s.object<V1DeviceListItem>({
  deviceId: s.optional(s.string()),
  status: s.optional(s.string()),
  reason: s.optional(s.string()),
  _keysMap: {
    reason: "Reason",
  },
});
