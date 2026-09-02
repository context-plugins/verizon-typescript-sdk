import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdforplannerSchema, type DeviceIdforplanner } from "./device-idforplanner.js";

export type DeviceStatusItemforplanner = {
  deviceIds?: DeviceIdforplanner[] | null;
  status?: string | null;
  reason?: string | null;
};

export const deviceStatusItemforplannerSchema: Schema<DeviceStatusItemforplanner> =
  s.object<DeviceStatusItemforplanner>({
    deviceIds: s.optionalNullable(s.array(s.lazy(() => deviceIdforplannerSchema))),
    status: s.optionalNullable(s.string()),
    reason: s.optionalNullable(s.string()),
  });
