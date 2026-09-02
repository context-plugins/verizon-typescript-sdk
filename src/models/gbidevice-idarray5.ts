import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceId1Schema, type DeviceId1 } from "./unions/device-id1.js";

export type GbideviceIdarray5 = {
  deviceId?: DeviceId1[];
};

export const gbideviceIdarray5Schema: Schema<GbideviceIdarray5> = s.object<GbideviceIdarray5>({
  deviceId: s.optional(s.array(s.lazy(() => deviceId1Schema))),
});
