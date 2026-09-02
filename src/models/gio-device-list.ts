import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type GioDeviceList = {
  deviceIds?: GioDeviceId[];
};

export const gioDeviceListSchema: Schema<GioDeviceList> = s.object<GioDeviceList>({
  deviceIds: s.optional(s.array(s.lazy(() => gioDeviceIdSchema))),
});
