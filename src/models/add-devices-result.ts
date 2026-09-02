import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type AddDevicesResult = {
  deviceIds?: DeviceId[];
  response?: string;
};

export const addDevicesResultSchema: Schema<AddDevicesResult> = s.object<AddDevicesResult>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
  response: s.optional(s.string()),
});
