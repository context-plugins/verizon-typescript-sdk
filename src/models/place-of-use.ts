import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerNameSchema, type CustomerName } from "./customer-name.js";

/**
 * The customer name and the address of the device's primary place of use. Leave these fields empty
 * to use the account profile address as the primary place of use. These values will be applied to
 * all devices in the request.If the account is enabled for non-geographic MDNs and the device
 * supports it, the primaryPlaceOfUse address will also be used to derive the MDN for the device.
 */
export type PlaceOfUse = {
  /** The customer address for the line's primary place of use, for line usage taxation. */
  address: Address;
  /** The customer name to be used for line usage taxation. */
  customerName: CustomerName;
};

export const placeOfUseSchema: Schema<PlaceOfUse> = s.object<PlaceOfUse>({
  address: addressSchema,
  customerName: customerNameSchema,
});
