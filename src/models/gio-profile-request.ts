import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceListSchema, type GioDeviceList } from "./gio-device-list.js";

export type GioProfileRequest = {
  devices: GioDeviceList[];
  accountName: string;
  smrsOid?: string;
  mdnZipCode?: string;
  servicePlan?: string;
};

export const gioProfileRequestSchema: Schema<GioProfileRequest> = s.object<GioProfileRequest>({
  devices: s.array(s.lazy(() => gioDeviceListSchema)),
  accountName: s.string(),
  smrsOid: s.optional(s.string()),
  mdnZipCode: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});
