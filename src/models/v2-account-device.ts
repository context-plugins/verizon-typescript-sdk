import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2SoftwareInfoSchema, type V2SoftwareInfo } from "./v2-software-info.js";

export type V2AccountDevice = {
  deviceId: string;
  mdn: string;
  model: string;
  make: string;
  fotaEligible: boolean;
  appFotaEligible: boolean;
  licenseAssigned: boolean;
  distributionType: string;
  softwareList: V2SoftwareInfo[];
  createTime?: string;
  upgradeTime?: string;
  updateTime?: string;
  refreshTime?: string;
};

export const v2AccountDeviceSchema: Schema<V2AccountDevice> = s.object<V2AccountDevice>({
  deviceId: s.string(),
  mdn: s.string(),
  model: s.string(),
  make: s.string(),
  fotaEligible: s.boolean(),
  appFotaEligible: s.boolean(),
  licenseAssigned: s.boolean(),
  distributionType: s.string(),
  softwareList: s.array(s.lazy(() => v2SoftwareInfoSchema)),
  createTime: s.optional(s.string()),
  upgradeTime: s.optional(s.string()),
  updateTime: s.optional(s.string()),
  refreshTime: s.optional(s.string()),
});
