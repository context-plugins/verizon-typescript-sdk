import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MismatchedDevice = {
  accountName?: string;
  mdn?: string;
  activationDate?: string;
  iccid?: string;
  preImei?: string;
  postImei?: string;
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
