import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceId2 = {
  id?: string;
  kind?: string;
};

export const deviceId2Schema: Schema<DeviceId2> = s.object<DeviceId2>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
