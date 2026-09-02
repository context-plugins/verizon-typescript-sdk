import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { readySimDeviceIdSchema, type ReadySimDeviceId } from "./ready-sim-device-id.js";

export type RequestBodyForUsage = {
  accountId?: string;
  deviceId?: ReadySimDeviceId[];
  startTime?: Date;
  endTime?: Date;
};

export const requestBodyForUsageSchema: Schema<RequestBodyForUsage> = s.object<RequestBodyForUsage>({
  accountId: s.optional(s.string()),
  deviceId: s.optional(s.array(s.lazy(() => readySimDeviceIdSchema))),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
});
