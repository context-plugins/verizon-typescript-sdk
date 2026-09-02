import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1DeviceListItemSchema, type V1DeviceListItem } from "./v1-device-list-item.js";

export type FirmwareUpgradeChangeResult = {
  accountName?: string;
  id?: string;
  deviceList?: V1DeviceListItem[];
};

export const firmwareUpgradeChangeResultSchema: Schema<FirmwareUpgradeChangeResult> =
  s.object<FirmwareUpgradeChangeResult>({
    accountName: s.optional(s.string()),
    id: s.optional(s.string()),
    deviceList: s.optional(s.array(s.lazy(() => v1DeviceListItemSchema))),
  });
