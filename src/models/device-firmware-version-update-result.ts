import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Device firmware version update response. */
export type DeviceFirmwareVersionUpdateResult = {
  /** Account identifier. */
  accountName: string;
  /** Request identifier. */
  requestId: string;
};

export const deviceFirmwareVersionUpdateResultSchema: Schema<DeviceFirmwareVersionUpdateResult> =
  s.object<DeviceFirmwareVersionUpdateResult>({
    accountName: s.string(),
    requestId: s.string(),
  });
