import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceFilterSchema, type DeviceFilter } from "./device-filter.js";

/** Request to move active devices from one billing account to another within a customer profile. */
export type MoveDeviceRequest = {
  /** The name of the billing account that you want to move the devices to. */
  accountName: string;
  /**
   * Specify the kind of the device identifier, the type of match, and the string that you want to
   * match.
   */
  filter?: DeviceFilter;
  /**
   * Custom field names and values, if you want to only include devices that have matching values.
   */
  customFields?: CustomFields[];
  /**
   * Up to 10,000 devices that you want to move to a different account, specified by device
   * identifier.
   */
  devices?: AccountDeviceList[];
  /** The name of a device group, to only include devices in that group. */
  groupName?: string;
  /**
   * The pool from which device IP addresses will be derived in the new account. If you do not
   * include this element, the default pool will be used.
   */
  carrierIpPoolName?: string;
  /**
   * The service plan code that you want to assign to the devices in the new account. If you do not
   * include this element, ThingSpace will attempt to use the current service plan, which will
   * result in a error if the new account does not have that service plan.
   */
  servicePlan?: string;
};

export const moveDeviceRequestSchema: Schema<MoveDeviceRequest> = s.object<MoveDeviceRequest>({
  accountName: s.string(),
  filter: s.optional(s.lazy(() => deviceFilterSchema)),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  groupName: s.optional(s.string()),
  carrierIpPoolName: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
});
