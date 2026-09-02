import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2DeviceStatusSchema, type V2DeviceStatus } from "./v2-device-status.js";

export type V2LicensesAssignedRemovedResult = {
  accountName: string;
  licTotalCount: number;
  licUsedCount: number;
  deviceList: V2DeviceStatus[];
};

export const v2LicensesAssignedRemovedResultSchema: Schema<V2LicensesAssignedRemovedResult> =
  s.object<V2LicensesAssignedRemovedResult>({
    accountName: s.string(),
    licTotalCount: s.number(),
    licUsedCount: s.number(),
    deviceList: s.array(s.lazy(() => v2DeviceStatusSchema)),
  });
