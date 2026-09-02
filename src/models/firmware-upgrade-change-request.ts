import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firmwareTypeListSchema, type FirmwareTypeList } from "./firmware-type-list.js";

export type FirmwareUpgradeChangeRequest = {
  type: FirmwareTypeList;
  deviceList: string[];
};

export const firmwareUpgradeChangeRequestSchema: Schema<FirmwareUpgradeChangeRequest> =
  s.object<FirmwareUpgradeChangeRequest>({
    type: firmwareTypeListSchema,
    deviceList: s.array(s.string()),
  });
