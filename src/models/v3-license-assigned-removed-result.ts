import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3DeviceStatusSchema, type V3DeviceStatus } from "./v3-device-status.js";

/** License assignment/removal response. */
export type V3LicenseAssignedRemovedResult = {
  /** Account name. */
  accountName: string;
  /** Total license count. */
  licCount: number;
  /** Assigned license count. */
  licUsedCount: number;
  /** List of devices with id in IMEI. */
  deviceList: V3DeviceStatus[];
};

export const v3LicenseAssignedRemovedResultSchema: Schema<V3LicenseAssignedRemovedResult> =
  s.object<V3LicenseAssignedRemovedResult>({
    accountName: s.string(),
    licCount: s.int(),
    licUsedCount: s.int(),
    deviceList: s.array(s.lazy(() => v3DeviceStatusSchema)),
  });
