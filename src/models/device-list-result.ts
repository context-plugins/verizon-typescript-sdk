import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceSchema, type V3Device } from "./v3-device.js";

export type DeviceListResult = {
  accountName: string;
  deviceCount: number;
  deviceList: V3Device[];
};

export const deviceListResultSchema: Schema<DeviceListResult> = s.object<DeviceListResult>({
  accountName: s.string(),
  deviceCount: s.number(),
  deviceList: s.array(s.lazy(() => v3DeviceSchema)),
});
