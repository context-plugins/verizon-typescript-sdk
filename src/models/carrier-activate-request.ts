import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { placeOfUseSchema, type PlaceOfUse } from "./place-of-use.js";

export type CarrierActivateRequest = {
  devices: AccountDeviceList[];
  servicePlan: string;
  mdnZipCode: string;
  accountName?: string;
  carrierIpPoolName?: string;
  carrierName?: string;
  costCenterCode?: string;
  customFields?: CustomFields[];
  groupName?: string;
  leadId?: string;
  primaryPlaceOfUse?: PlaceOfUse;
  publicIpRestriction?: string;
  skuNumber?: string;
};

export const carrierActivateRequestSchema: Schema<CarrierActivateRequest> = s.object<CarrierActivateRequest>({
  devices: s.array(s.lazy(() => accountDeviceListSchema)),
  servicePlan: s.string(),
  mdnZipCode: s.string(),
  accountName: s.optional(s.string()),
  carrierIpPoolName: s.optional(s.string()),
  carrierName: s.optional(s.string()),
  costCenterCode: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  groupName: s.optional(s.string()),
  leadId: s.optional(s.string()),
  primaryPlaceOfUse: s.optional(s.lazy(() => placeOfUseSchema)),
  publicIpRestriction: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
});
