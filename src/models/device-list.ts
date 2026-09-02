import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type DeviceList = {
  deviceIds?: DeviceId[];
};

export const deviceListSchema: Schema<DeviceList> = s.object<DeviceList>({
  deviceIds: s.optional(s.array(s.lazy(() => deviceIdSchema))),
});
