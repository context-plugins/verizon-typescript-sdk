import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1DeviceListItemSchema, type V1DeviceListItem } from "./v1-device-list-item.js";

/** Upgrade information. */
export type FirmwareUpgradeChangeResult = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** The unique identifier for this upgrade. */
  id?: string;
  /**
   * A JSON object for each device that was included in the request, showing the device IMEI, the
   * status of the addition or removal, and additional information about the status.
   */
  deviceList?: V1DeviceListItem[];
};

export const firmwareUpgradeChangeResultSchema: Schema<FirmwareUpgradeChangeResult> =
  s.object<FirmwareUpgradeChangeResult>({
    accountName: s.optional(s.string()),
    id: s.optional(s.string()),
    deviceList: s.optional(s.array(s.lazy(() => v1DeviceListItemSchema))),
  });
