import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type CarrierDeactivateRequest = {
  accountName: string;
  devices: AccountDeviceList[];
  reasonCode: string;
  customFields?: CustomFields[];
  etfWaiver?: boolean;
  groupName?: string;
  servicePlan?: string;
  deleteAfterDeactivation?: boolean;
};

export const carrierDeactivateRequestSchema: Schema<CarrierDeactivateRequest> =
  s.object<CarrierDeactivateRequest>({
    accountName: s.string(),
    devices: s.array(s.lazy(() => accountDeviceListSchema)),
    reasonCode: s.string(),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    etfWaiver: s.optional(s.boolean()),
    groupName: s.optional(s.string()),
    servicePlan: s.optional(s.string()),
    deleteAfterDeactivation: s.optional(s.boolean()),
  });
