import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2DeviceStatusSchema, type V2DeviceStatus } from "./v2-device-status.js";

/** List of devices in a campaign. */
export type V2CampaignDevice = {
  /** Total device count. */
  totalDevice?: number;
  /** Has more report flag. */
  hasMoreData: boolean;
  /** Device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** List of devices with id in IMEI. */
  deviceList: V2DeviceStatus[];
};

export const v2CampaignDeviceSchema: Schema<V2CampaignDevice> = s.object<V2CampaignDevice>({
  totalDevice: s.optional(s.int()),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.int(),
  deviceList: s.array(s.lazy(() => v2DeviceStatusSchema)),
});
