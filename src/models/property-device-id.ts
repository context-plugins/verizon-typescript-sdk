import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PropertyDeviceId = {
  id?: string;
  /**
   * The type of the device identifier. Valid types of identifiers are:ESN (decimal),EID,ICCID (up
   * to 20 digits),IMEI (up to 16 digits),MDN,MEID (hexadecimal),MSISDN.
   */
  kind?: string;
};

export const propertyDeviceIdSchema: Schema<PropertyDeviceId> = s.object<PropertyDeviceId>({
  id: s.optional(s.string()),
  kind: s.optional(s.string()),
});
