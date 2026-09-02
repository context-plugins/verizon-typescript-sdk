import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type AddDevicesRequest = {
  state: string;
  devicesToAdd: AccountDeviceList[];
  accountName?: string;
  customFields?: CustomFields[];
  groupName?: string;
  skuNumber?: string;
  smsrOid?: string;
};

export const addDevicesRequestSchema: Schema<AddDevicesRequest> = s.object<AddDevicesRequest>({
  state: s.string(),
  devicesToAdd: s.array(s.lazy(() => accountDeviceListSchema)),
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  groupName: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
  smsrOid: s.optional(s.string()),
});
