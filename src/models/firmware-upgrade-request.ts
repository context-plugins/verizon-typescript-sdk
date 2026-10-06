import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details of the firmware upgrade request. */
export type FirmwareUpgradeRequest = {
  /** Account identifier in "##########-#####". */
  accountName: string;
  /**
   * The name of the firmware image that will be used for the upgrade, from a GET /firmware
   * response.
   */
  firmwareName: string;
  /** The name of the firmware version that will be on the devices after a successful upgrade. */
  firmwareTo: string;
  /** The date that the upgrade begins. */
  startDate: string;
  /** The date that the upgrade ends. */
  endDate: string;
  /** The IMEIs of the devices. */
  deviceList: string[];
};

export const firmwareUpgradeRequestSchema: Schema<FirmwareUpgradeRequest> = s.object<FirmwareUpgradeRequest>({
  accountName: s.string(),
  firmwareName: s.string(),
  firmwareTo: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  deviceList: s.array(s.string()),
});
