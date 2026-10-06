import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An identifier for a single device. */
export type DeviceId = {
  /** The value of the device identifier. */
  id: string;
  /**
   * The type of the device identifier. Valid types of identifiers are:ESN (decimal),EID,ICCID (up
   * to 20 digits),IMEI (up to 16 digits),MDN,MEID (hexadecimal),MSISDN.
   */
  kind: string;
};

export const deviceIdSchema: Schema<DeviceId> = s.object<DeviceId>({
  id: s.string(),
  kind: s.string(),
});
