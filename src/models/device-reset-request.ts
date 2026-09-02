import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";

export type DeviceResetRequest = {
  accountName?: string;
  action?: string;
  devices?: Device[];
};

export const deviceResetRequestSchema: Schema<DeviceResetRequest> = s.object<DeviceResetRequest>({
  accountName: s.optional(s.string()),
  action: s.optional(s.string()),
  devices: s.optional(s.array(s.lazy(() => deviceSchema))),
});
