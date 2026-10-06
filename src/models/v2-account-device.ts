import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2SoftwareInfoSchema, type V2SoftwareInfo } from "./v2-software-info.js";

/** Account device information. */
export type V2AccountDevice = {
  /** Device identifier. */
  deviceId: string;
  /** MDN. */
  mdn: string;
  /** Device model. */
  model: string;
  /** Device make. */
  make: string;
  /** Device FOTA capable. */
  fotaEligible: boolean;
  /** Device application FOTA capable. */
  appFotaEligible: boolean;
  /** License assigned device. */
  licenseAssigned: boolean;
  /** LWM2M, OMD-DM or HTTP. */
  distributionType: string;
  /** List of sofware. */
  softwareList: V2SoftwareInfo[];
  /** The date and time of when the device is created. */
  createTime?: string;
  /** The date and time of when the device firmware or software is upgraded. */
  upgradeTime?: string;
  /** The date and time of when the device is updated. */
  updateTime?: string;
  /** The date and time of when the device is refreshed. */
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
