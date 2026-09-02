import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eSimDeviceListSchema, type ESimDeviceList } from "./esim-device-list.js";

export type ESimProfileRequest2 = {
  devices?: ESimDeviceList[];
  accountName?: string;
  servicePlan?: string;
  mdnZipCode?: string;
};

export const eSimProfileRequest2Schema: Schema<ESimProfileRequest2> = s.object<ESimProfileRequest2>({
  devices: s.optional(s.array(s.lazy(() => eSimDeviceListSchema))),
  accountName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  mdnZipCode: s.optional(s.string()),
});
