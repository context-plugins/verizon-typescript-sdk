import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3SoftwareInfoSchema, type V3SoftwareInfo } from "./v3-software-info.js";

/** Device information. */
export type V3Device = {
  /** Device IMEI. */
  deviceId: string;
  /** Success or failure. */
  requestStatus?: string;
  resultReason?: string;
  /** MDN. */
  mdn?: string;
  /** Device model. */
  model?: string;
  /** Device make. */
  make?: string;
  /** Device firmware version. */
  firmware?: string;
  /**
   * Value=true if the device software can be upgraded over the air using the Software Management
   * Services API.
   */
  fotaEligible?: boolean;
  /** Device status. */
  status?: string;
  /** License assigned device. */
  licenseAssigned?: boolean;
  /** Firmware protocol. Valid values include: LWM2M, OMADM, HTTP or NONE. */
  protocol?: string;
  /** List of sofware. */
  softwareList?: V3SoftwareInfo[];
  /** List of files. */
  fileList?: V3SoftwareInfo[];
  /** The date and time of when the device is created. */
  createTime?: string;
  /** The date and time of when the device firmware or software is updated. */
  statusTime?: string;
  /** The date and time of when the device is updated. */
  updateTime?: string;
  /** The date and time of when the device is refreshed. */
  refreshTime?: string;
  /** The date and time of when the device reachability is checked. */
  lastConnectionTime?: Date;
};

export const v3DeviceSchema: Schema<V3Device> = s.object<V3Device>({
  deviceId: s.string(),
  requestStatus: s.optional(s.string()),
  resultReason: s.optional(s.string()),
  mdn: s.optional(s.string()),
  model: s.optional(s.string()),
  make: s.optional(s.string()),
  firmware: s.optional(s.string()),
  fotaEligible: s.optional(s.boolean()),
  status: s.optional(s.string()),
  licenseAssigned: s.optional(s.boolean()),
  protocol: s.optional(s.string()),
  softwareList: s.optional(s.array(s.lazy(() => v3SoftwareInfoSchema))),
  fileList: s.optional(s.array(s.lazy(() => v3SoftwareInfoSchema))),
  createTime: s.optional(s.string()),
  statusTime: s.optional(s.string()),
  updateTime: s.optional(s.string()),
  refreshTime: s.optional(s.string()),
  lastConnectionTime: s.optional(s.dateTime()),
});
