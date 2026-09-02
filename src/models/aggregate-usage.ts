import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type AggregateUsage = {
  deviceId?: GioDeviceId;
  accountName?: string;
  startTime?: string;
  endTime?: string;
};

export const aggregateUsageSchema: Schema<AggregateUsage> = s.object<AggregateUsage>({
  deviceId: s.optional(s.lazy(() => gioDeviceIdSchema)),
  accountName: s.optional(s.string()),
  startTime: s.optional(s.string()),
  endTime: s.optional(s.string()),
});
