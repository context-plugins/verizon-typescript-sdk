import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Request to update service plan. */
export type ServicePlanUpdateRequest = {
  /** The service plan code that you want to assign to all specified devices. */
  servicePlan: string;
  /** The name of a billing account. */
  accountName?: string;
  /**
   * The name of a service plan, if you want to only include devices that have that service plan.
   */
  currentServicePlan?: string;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
  /** A list of the devices that you want to change, specified by device identifier. */
  devices?: AccountDeviceList[];
  /** The name of a device group, if you want to restore service for all devices in that group. */
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
