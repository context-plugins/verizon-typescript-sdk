import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { hplAccountDeviceListSchema, type HplAccountDeviceList } from "./hpl-account-device-list.js";
import { hplCustomFieldsSchema, type HplCustomFields } from "./hpl-custom-fields.js";

/** Request to add the devices. */
export type HplAddDevicesRequest = {
  /** The initial service state for the devices. The only valid state is "Preactive." */
  state?: string;
  /** The devices that you want to add. */
  devicesToAdd?: HplAccountDeviceList[];
  /** The numeric name of the account and must include leading zeroes. */
  accountName?: string;
  /**
   * The names and values for any custom fields that you want set for the devices as they are added
   * to the account.
   */
  customFields?: HplCustomFields[];
  /**
   * The name of a device group to add the devices to. They are added to the default device group if
   * you don't include this parameter.
   */
  groupName?: string;
  /** The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. */
  skuNumber?: string;
  /**
   * The Subscription Manager Secure Router Object ID, used for remote SIM provisioning. SMSR
   * securely routes the download and management of eSIM profiles.
   */
  smsrOid?: string;
  /** numberOfVirtualImei. */
  numberOfVirtualImei?: number;
  /** uploadType. */
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
  numberOfVirtualImei: s.optional(s.int()),
  uploadType: s.optional(s.string()),
});
