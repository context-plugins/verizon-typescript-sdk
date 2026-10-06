import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firmwareTypeListSchema, type FirmwareTypeList } from "./firmware-type-list.js";

/** List of devices to add or remove. */
export type FirmwareUpgradeChangeRequest = {
  /** Possible values are `append` or `remove` */
  type: FirmwareTypeList;
  /** The IMEIs of the devices. */
  deviceList: string[];
};

export const firmwareUpgradeChangeRequestSchema: Schema<FirmwareUpgradeChangeRequest> =
  s.object<FirmwareUpgradeChangeRequest>({
    type: firmwareTypeListSchema,
    deviceList: s.array(s.string()),
  });
