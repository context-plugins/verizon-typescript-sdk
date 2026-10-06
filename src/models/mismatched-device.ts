import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * 4G devices with an ICCID (SIM) that was not activated with the expected IMEI (hardware) during a
 * specified time frame.
 */
export type MismatchedDevice = {
  /** The account that the device is associated with. */
  accountName?: string;
  /** The assigned phone number of the device. */
  mdn?: string;
  /** The date and time when the SIM was last activated. */
  activationDate?: string;
  /** The ID of the SIM. */
  iccid?: string;
  /** The IMEI of the device prior to the SIM OTA activation on simOtaDate. */
  preImei?: string;
  /** The IMEI of the device after the SIM OTA activation on simOtaDate. */
  postImei?: string;
  /** The date and time of the SIM OTA activation. */
  simOtaDate?: string;
};

export const mismatchedDeviceSchema: Schema<MismatchedDevice> = s.object<MismatchedDevice>({
  accountName: s.optional(s.string()),
  mdn: s.optional(s.string()),
  activationDate: s.optional(s.string()),
  iccid: s.optional(s.string()),
  preImei: s.optional(s.string()),
  postImei: s.optional(s.string()),
  simOtaDate: s.optional(s.string()),
});
