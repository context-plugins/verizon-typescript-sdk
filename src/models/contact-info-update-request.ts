import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";
import { placeOfUseSchema, type PlaceOfUse } from "./place-of-use.js";

/** Request to update contact information. */
export type ContactInfoUpdateRequest = {
  /**
   * The customer name and the address of the device's primary place of use. Leave these fields
   * empty to use the account profile address as the primary place of use. These values will be
   * applied to all devices in the request.If the account is enabled for non-geographic MDNs and the
   * device supports it, the primaryPlaceOfUse address will also be used to derive the MDN for the
   * device.
   */
  primaryPlaceOfUse: PlaceOfUse;
  /**
   * The name of the billing account that the devices belong to. An account name is usually numeric,
   * and must include any leading zeros.
   */
  accountName?: string;
  /**
   * A list of the devices that you want to change, specified by device identifier. You only need to
   * provide one identifier per device. Do not include accountName, groupName, customFields, or
   * servicePlan if you use this parameter.
   */
  devices?: AccountDeviceList[];
};

export const contactInfoUpdateRequestSchema: Schema<ContactInfoUpdateRequest> =
  s.object<ContactInfoUpdateRequest>({
    primaryPlaceOfUse: placeOfUseSchema,
    accountName: s.optional(s.string()),
    devices: s.optional(s.array(s.lazy(() => accountDeviceListSchema))),
  });
