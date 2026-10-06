import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A JSON object for each device that was included in the request, showing the device IMEI, the
 * status of the addition or removal, and additional information about the status.
 */
export type V1DeviceListItem = {
  /** Device IMEI. */
  deviceId?: string;
  /** Whether the device was successfully added or removed from the campaign. */
  status?: string;
  /** Additional details about the status. */
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
