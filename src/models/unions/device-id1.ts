import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deviceId2Schema, type DeviceId2 } from "../device-id2.js";
import { eSimDeviceIdSchema, type ESimDeviceId } from "../esim-device-id.js";

export type DeviceId1 = ESimDeviceId | DeviceId2;

export const deviceId1Schema: Schema<DeviceId1> = s.of<DeviceId1>(
  s.union([s.lazy(() => eSimDeviceIdSchema), s.lazy(() => deviceId2Schema)]),
);
