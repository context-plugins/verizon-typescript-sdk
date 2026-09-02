import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { gbideviceId15Schema, type GbideviceId15 } from "../gbidevice-id15.js";

export type DeviceId11 = GbideviceId15;

export const deviceId11Schema: Schema<DeviceId11> = s.of<DeviceId11>(
  s.union([s.lazy(() => gbideviceId15Schema)]),
);
