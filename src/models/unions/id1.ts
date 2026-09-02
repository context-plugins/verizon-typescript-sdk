import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deviceId2Schema, type DeviceId2 } from "../device-id2.js";
import { eSimDeviceIdSchema, type ESimDeviceId } from "../esim-device-id.js";

export type Id1 = ESimDeviceId | DeviceId2;

export const id1Schema: Schema<Id1> = s.of<Id1>(
  s.union([s.lazy(() => eSimDeviceIdSchema), s.lazy(() => deviceId2Schema)]),
);
