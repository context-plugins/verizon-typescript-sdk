import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceListItemSchema, type V3DeviceListItem } from "./v3-device-list-item.js";

export type V3AddOrRemoveDeviceResult = {
  accountName: string;
  campaignId: string;
  deviceList: V3DeviceListItem[];
};

export const v3AddOrRemoveDeviceResultSchema: Schema<V3AddOrRemoveDeviceResult> =
  s.object<V3AddOrRemoveDeviceResult>({
    accountName: s.string(),
    campaignId: s.string(),
    deviceList: s.array(s.lazy(() => v3DeviceListItemSchema)),
  });
