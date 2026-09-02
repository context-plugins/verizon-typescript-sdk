import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceIdarray = {
  kind?: string;
  id?: string;
};

export const deviceIdarraySchema: Schema<DeviceIdarray> = s.object<DeviceIdarray>({
  kind: s.optional(s.string()),
  id: s.optional(s.string()),
});
