import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DevicePropertylocation = {
  latitude?: string;
  longitude?: string;
};

export const devicePropertylocationSchema: Schema<DevicePropertylocation> = s.object<DevicePropertylocation>({
  latitude: s.optional(s.string()),
  longitude: s.optional(s.string()),
});
