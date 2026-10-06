import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2DeviceStatusSchema, type V2DeviceStatus } from "./v2-device-status.js";

/** License assignment or removal confirmation. */
export type V2LicensesAssignedRemovedResult = {
  /** Account name. */
  accountName: string;
  /** Total license count. */
  licTotalCount: number;
  /** Assigned license count. */
  licUsedCount: number;
  /** List of devices with id in IMEI. */
  deviceList: V2DeviceStatus[];
};

export const v2LicensesAssignedRemovedResultSchema: Schema<V2LicensesAssignedRemovedResult> =
  s.object<V2LicensesAssignedRemovedResult>({
    accountName: s.string(),
    licTotalCount: s.int(),
    licUsedCount: s.int(),
    deviceList: s.array(s.lazy(() => v2DeviceStatusSchema)),
  });
