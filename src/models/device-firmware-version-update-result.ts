import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceFirmwareVersionUpdateResult = {
  accountName: string;
  requestId: string;
};

export const deviceFirmwareVersionUpdateResultSchema: Schema<DeviceFirmwareVersionUpdateResult> =
  s.object<DeviceFirmwareVersionUpdateResult>({
    accountName: s.string(),
    requestId: s.string(),
  });
