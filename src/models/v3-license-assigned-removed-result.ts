import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceStatusSchema, type V3DeviceStatus } from "./v3-device-status.js";

export type V3LicenseAssignedRemovedResult = {
  accountName: string;
  licCount: number;
  licUsedCount: number;
  deviceList: V3DeviceStatus[];
};

export const v3LicenseAssignedRemovedResultSchema: Schema<V3LicenseAssignedRemovedResult> =
  s.object<V3LicenseAssignedRemovedResult>({
    accountName: s.string(),
    licCount: s.number(),
    licUsedCount: s.number(),
    deviceList: s.array(s.lazy(() => v3DeviceStatusSchema)),
  });
