import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceIdSchema, type DeviceId } from "./device-id.js";

export type AccountDeviceList = {
  deviceIds: DeviceId[];
  ipAddress?: string;
};

export const accountDeviceListSchema: Schema<AccountDeviceList> = s.object<AccountDeviceList>({
  deviceIds: s.array(s.lazy(() => deviceIdSchema)),
  ipAddress: s.optional(s.string()),
});
