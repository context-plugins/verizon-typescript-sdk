import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3SoftwareInfoSchema, type V3SoftwareInfo } from "./v3-software-info.js";

/** Device information. */
export type V3AccountDevice = {
  /** Device identifier. */
  deviceId: string;
  /** MDN. */
  mdn: string;
  /** Device model. */
  model: string;
  /** Device make. */
  make: string;
  /** Device firmware version. */
  firmware: string;
  /**
   * Value=true if the device software can be upgraded over the air using the Software Management
   * Services API.
   */
  fotaEligible: boolean;
  /** Device status. */
  status: string;
  /** License assigned device. */
  licenseAssigned: boolean;
  /** Firmware protocol. Valid values include: LWM2M, OMADM, HTTP or NONE. */
  protocol: string;
  /** List of sofware. */
  softwareList: V3SoftwareInfo[];
  /** List of files. */
  fileList?: V3SoftwareInfo[];
  /** The date and time of when the device is created. */
  createTime?: string;
  /** The date and time of when the device firmware or software is updated. */
  upgradeTime?: string;
  /** The date and time of when the device is updated. */
  updateTime?: string;
  /** The date and time of when the device is refreshed. */
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
