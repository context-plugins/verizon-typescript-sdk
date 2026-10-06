import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceStatusSchema, type V3DeviceStatus } from "./v3-device-status.js";

/** Campaign history. */
export type V3CampaignDevice = {
  /** Total device count. */
  totalDevice?: number;
  /** Has more report flag. */
  hasMoreData: boolean;
  /** Device identifier. */
  lastSeenDeviceId?: string;
  /** Maximum page size. */
  maxPageSize: number;
  /** List of devices with id in IMEI. */
  deviceList: V3DeviceStatus[];
};

export const v3CampaignDeviceSchema: Schema<V3CampaignDevice> = s.object<V3CampaignDevice>({
  totalDevice: s.optional(s.int()),
  hasMoreData: s.boolean(),
  lastSeenDeviceId: s.optional(s.string()),
  maxPageSize: s.int(),
  deviceList: s.array(s.lazy(() => v3DeviceStatusSchema)),
});
