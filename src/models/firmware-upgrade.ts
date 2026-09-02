import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  firmwareUpgradeDeviceListItemSchema,
  type FirmwareUpgradeDeviceListItem,
} from "./firmware-upgrade-device-list-item.js";

export type FirmwareUpgrade = {
  id?: string;
  accountName?: string;
  firmwareName?: string;
  firmwareTo?: string;
  startDate?: string;
  status?: string;
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
