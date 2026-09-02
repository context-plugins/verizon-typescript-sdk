import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FirmwareImei = {
  deviceList: string[];
};

export const firmwareImeiSchema: Schema<FirmwareImei> = s.object<FirmwareImei>({
  deviceList: s.array(s.string()),
});
