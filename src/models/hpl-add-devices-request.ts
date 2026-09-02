import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hplAccountDeviceListSchema, type HplAccountDeviceList } from "./hpl-account-device-list.js";
import { hplCustomFieldsSchema, type HplCustomFields } from "./hpl-custom-fields.js";

export type HplAddDevicesRequest = {
  state?: string;
  devicesToAdd?: HplAccountDeviceList[];
  accountName?: string;
  customFields?: HplCustomFields[];
  groupName?: string;
  skuNumber?: string;
  smsrOid?: string;
  numberOfVirtualImei?: number;
  uploadType?: string;
};

export const hplAddDevicesRequestSchema: Schema<HplAddDevicesRequest> = s.object<HplAddDevicesRequest>({
  state: s.optional(s.string()),
  devicesToAdd: s.optional(s.array(s.lazy(() => hplAccountDeviceListSchema))),
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => hplCustomFieldsSchema))),
  groupName: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
  smsrOid: s.optional(s.string()),
  numberOfVirtualImei: s.optional(s.number()),
  uploadType: s.optional(s.string()),
});
