import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type CarrierActionsRequest = {
  accountName?: string;
  customFields?: CustomFields[];
  devices?: AccountDeviceList[];
  withBilling?: boolean;
  groupName?: string;
  servicePlan?: string;
};

export const carrierActionsRequestSchema: Schema<CarrierActionsRequest> = s.object<CarrierActionsRequest>({
  accountName: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  withBilling: s.optional(s.boolean()),
  groupName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});
