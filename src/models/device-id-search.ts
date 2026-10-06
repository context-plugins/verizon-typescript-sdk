import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Search by device id. */
export type DeviceIdSearch = {
  /** The string appears anywhere in the identifer. */
  contains: string;
  /** The identifer must start with the specified string. */
  startswith?: string;
  /** The identifier must end with the specified string. */
  endswith?: string;
  /**
   * The type of the device identifier. Valid types of identifiers are:ESN (decimal),EID,ICCID (up
   * to 20 digits),IMEI (up to 16 digits),MDN,MEID (hexadecimal),MSISDN.
   */
  kind: string;
};

export const deviceIdSearchSchema: Schema<DeviceIdSearch> = s.object<DeviceIdSearch>({
  contains: s.string(),
  startswith: s.optional(s.string()),
  endswith: s.optional(s.string()),
  kind: s.string(),
});
