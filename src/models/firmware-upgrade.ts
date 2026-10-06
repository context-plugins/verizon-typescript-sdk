import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  firmwareUpgradeDeviceListItemSchema,
  type FirmwareUpgradeDeviceListItem,
} from "./firmware-upgrade-device-list-item.js";

/** Array of upgrade objects with the specified status. */
export type FirmwareUpgrade = {
  /** The unique identifier for this upgrade. */
  id?: string;
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** The name of the firmware image that will be used for the upgrade. */
  firmwareName?: string;
  /** The name of the firmware version that will be on the devices after a successful upgrade. */
  firmwareTo?: string;
  /** The intended start date for the upgrade. */
  startDate?: string;
  /** The current status of the upgrade. */
  status?: string;
  /**
   * A JSON object for each device that was included in the upgrade, showing the device IMEI, the
   * status of the upgrade, and additional information about the status.
   */
  deviceList?: FirmwareUpgradeDeviceListItem[];
};

export const firmwareUpgradeSchema: Schema<FirmwareUpgrade> = s.object<FirmwareUpgrade>({
  id: s.optional(s.string()),
  accountName: s.optional(s.string()),
  firmwareName: s.optional(s.string()),
  firmwareTo: s.optional(s.string()),
  startDate: s.optional(s.string()),
  status: s.optional(s.string()),
  deviceList: s.optional(s.array(s.lazy(() => firmwareUpgradeDeviceListItemSchema))),
});
