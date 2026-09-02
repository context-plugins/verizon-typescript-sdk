import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceListSchema, type DeviceList } from "./device-list.js";

export type ActivateDeviceProfileRequest = {
  devices: DeviceList[];
  accountName: string;
  servicePlan?: string;
  mdnZipCode?: string;
};

export const activateDeviceProfileRequestSchema: Schema<ActivateDeviceProfileRequest> =
  s.object<ActivateDeviceProfileRequest>({
    devices: s.array(s.lazy(() => deviceListSchema)),
    accountName: s.string(),
    servicePlan: s.optional(s.string()),
    mdnZipCode: s.optional(s.string()),
  });
