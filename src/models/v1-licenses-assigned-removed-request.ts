import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** IMEIs of the devices to assign licenses to. */
export type V1LicensesAssignedRemovedRequest = {
  /** The IMEIs of the devices. */
  deviceList: string[];
};

export const v1LicensesAssignedRemovedRequestSchema: Schema<V1LicensesAssignedRemovedRequest> =
  s.object<V1LicensesAssignedRemovedRequest>({
    deviceList: s.array(s.string()),
  });
