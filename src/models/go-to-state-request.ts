import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";
import { deviceFilterSchema, type DeviceFilter } from "./device-filter.js";
import { placeOfUseSchema, type PlaceOfUse } from "./place-of-use.js";

/**
 * Changes the provisioning state of one or more devices to a specified customer-defined service and
 * state.
 */
export type GoToStateRequest = {
  /** The name of a customer-defined service to push the devices to. */
  serviceName: string;
  /** The name of a customer-defined stage state to push the devices to. */
  stateName: string;
  /** The service plan code that you want to assign to all specified devices in the new state. */
  servicePlan: string;
  /**
   * The Zip code of the location where the line of service will primarily be used, or a Zip code
   * that you have been told to use with these devices. For accounts that are configured for
   * geographic numbering, this is the ZIP code from which the MDN will be derived.
   */
  mdnZipCode: string;
  /**
   * Up to 10,000 devices that you want to push to a different state, specified by device
   * identifier.
   */
  devices?: AccountDeviceList[];
  /**
   * Specify the kind of the device identifier, the type of match, and the string that you want to
   * match.
   */
  filter?: DeviceFilter;
  /**
   * The pool from which your device IP addresses will be derived if the service or state change
   * requires new IP addresses.If you do not include this element, the default pool will be used.
   */
  carrierIpPoolName?: string;
  /**
   * For devices with static IP addresses on the public network, this specifies whether the devices
   * have general access to the Internet. Valid values are “restricted” or “unrestricted”.
   */
  publicIpRestriction?: string;
  /**
   * The Stock Keeping Unit (SKU) number of a 4G device type with an embedded SIM. Can be used with
   * ICCID or EID device identifiers in lieu of an IMEI when activating 4G devices. The SkuNumber
   * will be used with all devices in the request, so all devices must be of the same type.
   */
  skuNumber?: string;
  /** The names and values of any custom fields that you want to set for the devices. */
  customFields?: CustomFields[];
  /**
   * This is an array that associates an IP address with a device identifier. This variable is only
   * relevant for Business Internet/Fixed Wireless Access
   */
  devicesWithServiceAddress?: Record<string, unknown>[];
  /** The IP address of the device. */
  ipAddress?: string;
  /** The name of a device group that the devices should be added to. */
  groupName?: string;
  /**
   * The customer name and the address of the device's primary place of use. Leave these fields
   * empty to use the account profile address as the primary place of use. These values will be
   * applied to all devices in the request.If the account is enabled for non-geographic MDNs and the
   * device supports it, the primaryPlaceOfUse address will also be used to derive the MDN for the
   * device.
   */
  primaryPlaceOfUse?: PlaceOfUse;
};

export const goToStateRequestSchema: Schema<GoToStateRequest> = s.object<GoToStateRequest>({
  serviceName: s.string(),
  stateName: s.string(),
  servicePlan: s.string(),
  mdnZipCode: s.string(),
  devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  filter: s.optional(s.lazy(() => deviceFilterSchema)),
  carrierIpPoolName: s.optional(s.string()),
  publicIpRestriction: s.optional(s.string()),
  skuNumber: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldsSchema))),
  devicesWithServiceAddress: s.optional(s.array(s.record(s.string(), s.unknown()))),
  ipAddress: s.optional(s.string()),
  groupName: s.optional(s.string()),
  primaryPlaceOfUse: s.optional(s.lazy(() => placeOfUseSchema)),
});
