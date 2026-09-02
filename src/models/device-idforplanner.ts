import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceIdforplanner = {
  kind?: string | null;
  id?: string | null;
};

export const deviceIdforplannerSchema: Schema<DeviceIdforplanner> = s.object<DeviceIdforplanner>({
  kind: s.optionalNullable(s.string()),
  id: s.optionalNullable(s.string()),
});
