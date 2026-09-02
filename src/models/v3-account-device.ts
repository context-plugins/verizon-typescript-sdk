import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3SoftwareInfoSchema, type V3SoftwareInfo } from "./v3-software-info.js";

export type V3AccountDevice = {
  deviceId: string;
  mdn: string;
  model: string;
  make: string;
  firmware: string;
  fotaEligible: boolean;
  status: string;
  licenseAssigned: boolean;
  protocol: string;
  softwareList: V3SoftwareInfo[];
  fileList?: V3SoftwareInfo[];
  createTime?: string;
  upgradeTime?: string;
  updateTime?: string;
  refreshTime?: string;
};

export const v3AccountDeviceSchema: Schema<V3AccountDevice> = s.object<V3AccountDevice>({
  deviceId: s.string(),
  mdn: s.string(),
  model: s.string(),
  make: s.string(),
  firmware: s.string(),
  fotaEligible: s.boolean(),
  status: s.string(),
  licenseAssigned: s.boolean(),
  protocol: s.string(),
  softwareList: s.array(s.lazy(() => v3SoftwareInfoSchema)),
  fileList: s.optional(s.array(s.lazy(() => v3SoftwareInfoSchema))),
  createTime: s.optional(s.string()),
  upgradeTime: s.optional(s.string()),
  updateTime: s.optional(s.string()),
  refreshTime: s.optional(s.string()),
});
