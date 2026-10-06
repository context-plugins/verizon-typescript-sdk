import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceSchema, type V3Device } from "./v3-device.js";

/** Device list information. */
export type DeviceListResult = {
  /** Account name. */
  accountName: string;
  /** Total device count. */
  deviceCount: number;
  /** List of devices with id in IMEI. */
  deviceList: V3Device[];
};

export const deviceListResultSchema: Schema<DeviceListResult> = s.object<DeviceListResult>({
  accountName: s.string(),
  deviceCount: s.int(),
  deviceList: s.array(s.lazy(() => v3DeviceSchema)),
});
