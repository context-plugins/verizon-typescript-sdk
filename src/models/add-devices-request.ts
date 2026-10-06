import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

/** Request to add the devices. */
export type AddDevicesRequest = {
  /** The initial service state for the devices. The only valid state is “Pre-active.” */
  state: string;
  /** The devices that you want to add. */
  devicesToAdd: AccountDeviceList[];
  /** The billing account to which the devices are added. */
  accountName?: string;
  /**
   * The names and values for any custom fields that you want set for the devices as they are added
   * to the account.
   */
  customFields?: CustomFields[];
  /**
   * The name of a device group to add the devices to. They are added to the default device group if
   * you don't include this parameter.
   */
  groupName?: string;
  /** The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. */
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
