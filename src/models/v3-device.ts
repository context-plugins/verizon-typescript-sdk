import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3SoftwareInfoSchema, type V3SoftwareInfo } from "./v3-software-info.js";

export type V3Device = {
  deviceId: string;
  requestStatus?: string;
  resultReason?: string;
  mdn?: string;
  model?: string;
  make?: string;
  firmware?: string;
  fotaEligible?: boolean;
  status?: string;
  licenseAssigned?: boolean;
  protocol?: string;
  softwareList?: V3SoftwareInfo[];
  fileList?: V3SoftwareInfo[];
  createTime?: string;
  statusTime?: string;
  updateTime?: string;
  refreshTime?: string;
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
