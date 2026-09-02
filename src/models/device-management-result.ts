import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceManagementResult = {
  requestId?: string;
};

export const deviceManagementResultSchema: Schema<DeviceManagementResult> = s.object<DeviceManagementResult>({
  requestId: s.optional(s.string()),
});
