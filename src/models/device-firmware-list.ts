import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceFirmwareVersionSchema, type DeviceFirmwareVersion } from "./device-firmware-version.js";

export type DeviceFirmwareList = {
  accountName: string;
  deviceFirmwarVersionList?: DeviceFirmwareVersion[];
};

export const deviceFirmwareListSchema: Schema<DeviceFirmwareList> = s.object<DeviceFirmwareList>({
  accountName: s.string(),
  deviceFirmwarVersionList: s.optional(s.array(s.lazy(() => deviceFirmwareVersionSchema))),
});
