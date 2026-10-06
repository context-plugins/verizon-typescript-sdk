import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A list of IMEIs for devices to be synchronized between ThingSpace and the FOTA server. */
export type FirmwareImei = {
  /** Device IMEI list. */
  deviceList: string[];
};

export const firmwareImeiSchema: Schema<FirmwareImei> = s.object<FirmwareImei>({
  deviceList: s.array(s.string()),
});
