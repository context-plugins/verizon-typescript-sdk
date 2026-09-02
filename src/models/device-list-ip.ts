import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pwnDeviceIdSchema, type PwnDeviceId } from "./pwn-device-id.js";

export type DeviceListIp = {
  deviceIds: PwnDeviceId[];
  ipAddress: string;
};

export const deviceListIpSchema: Schema<DeviceListIp> = s.object<DeviceListIp>({
  deviceIds: s.array(s.lazy(() => pwnDeviceIdSchema)),
  ipAddress: s.string(),
});
