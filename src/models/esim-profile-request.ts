import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eSimDeviceListSchema, type ESimDeviceList } from "./esim-device-list.js";

export type ESimProfileRequest = {
  devices?: ESimDeviceList[];
  carrierName?: string;
  accountName?: string;
  servicePlan?: string;
  mdnZipCode?: string;
};

export const eSimProfileRequestSchema: Schema<ESimProfileRequest> = s.object<ESimProfileRequest>({
  devices: s.optional(s.array(s.lazy(() => eSimDeviceListSchema))),
  carrierName: s.optional(s.string()),
  accountName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  mdnZipCode: s.optional(s.string()),
});
