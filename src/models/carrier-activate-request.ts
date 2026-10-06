import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { placeOfUseSchema, type PlaceOfUse } from "./place-of-use.js";

/** Request for carrier activation. */
export type CarrierActivateRequest = {
  /**
   * Up to 10,000 devices for which you want to activate service, specified by device identifier.
   */
  devices: AccountDeviceList[];
  /** The service plan code that you want to assign to all specified devices. */
  servicePlan: string;
  /**
   * The Zip code of the location where the line of service will primarily be used, or a Zip code
   * that you have been told to use with these devices. For accounts that are configured for
   * geographic numbering, this is the ZIP code from which the MDN will be derived.
   */
  mdnZipCode: string;
  /** The name of a billing account. */
  accountName?: string;
  /**
   * The private IP pool (Carrier Group Name) from which your device IP addresses will be derived.
   */
  carrierIpPoolName?: string;
  /** The carrier that will perform the activation. */
  carrierName?: string;
  /** A string to identify the cost center that the device is associated with. */
  costCenterCode?: string;
  /** A user-defined descriptive field, limited to 50 characters. */
  customFields?: CustomFields[];
  /**
   * If you specify devices by ID in the devices parameters, this is the name of a device group that
   * the devices should be added to.If you don't specify individual devices with the devices
   * parameter, you can provide the name of a device group to activate all devices in that group.
   */
  groupName?: string;
  /**
   * The ID of a “Qualified” or “Closed - Won” VPP customer lead, which is used with other values to
   * determine MDN assignment, taxation, and compensation.
   */
  leadId?: string;
  /**
   * The customer name and the address of the device's primary place of use. Leave these fields
   * empty to use the account profile address as the primary place of use. These values will be
   * applied to all devices in the request.If the account is enabled for non-geographic MDNs and the
   * device supports it, the primaryPlaceOfUse address will also be used to derive the MDN for the
   * device.
   */
  primaryPlaceOfUse?: PlaceOfUse;
  /**
   * For devices with static IP addresses on the public network, this specifies whether the devices
   * have general access to the Internet.
   */
  publicIpRestriction?: string;
  /**
   * The Stock Keeping Unit (SKU) of a 4G device type can be used with ICCID device identifiers in
   * lieu of an IMEI when activating 4G devices. The SkuNumber will be used with all devices in the
   * request, so all devices must be of the same type.
   */
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
