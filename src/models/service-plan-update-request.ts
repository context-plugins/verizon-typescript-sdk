import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type ServicePlanUpdateRequest = {
  servicePlan: string;
  accountName?: string;
  currentServicePlan?: string;
  customFields?: CustomFields[];
  devices?: AccountDeviceList[];
  groupName?: string;
  carrierIpPoolName?: string;
  takeEffect?: Date;
};

export const servicePlanUpdateRequestSchema: Schema<ServicePlanUpdateRequest> =
  s.object<ServicePlanUpdateRequest>({
    servicePlan: s.string(),
    accountName: s.optional(s.string()),
    currentServicePlan: s.optional(s.string()),
    customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
    groupName: s.optional(s.string()),
    carrierIpPoolName: s.optional(s.string()),
    takeEffect: s.optional(s.dateTime()),
  });
