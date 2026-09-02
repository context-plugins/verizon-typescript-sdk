import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";
import { labelSchema, type Label } from "./label.js";

export type DeviceUsageListRequest = {
  earliest: string;
  latest: string;
  deviceId?: DeviceId;
  label?: Label;
};

export const deviceUsageListRequestSchema: Schema<DeviceUsageListRequest> = s.object<DeviceUsageListRequest>({
  earliest: s.string(),
  latest: s.string(),
  deviceId: s.optional(s.lazy(() => deviceIdSchema)),
  label: s.optional(s.lazy(() => labelSchema)),
});
