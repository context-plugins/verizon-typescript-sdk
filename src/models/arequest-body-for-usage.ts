import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { readySimDeviceIdSchema, type ReadySimDeviceId } from "./ready-sim-device-id.js";

export type ARequestBodyForUsage = {
  deviceId?: ReadySimDeviceId[];
  startTime?: Date;
  endTime?: Date;
};

export const aRequestBodyForUsageSchema: Schema<ARequestBodyForUsage> = s.object<ARequestBodyForUsage>({
  deviceId: s.optional(s.array(s.lazy(() => readySimDeviceIdSchema))),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
});
