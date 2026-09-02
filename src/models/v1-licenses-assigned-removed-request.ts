import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1LicensesAssignedRemovedRequest = {
  deviceList: string[];
};

export const v1LicensesAssignedRemovedRequestSchema: Schema<V1LicensesAssignedRemovedRequest> =
  s.object<V1LicensesAssignedRemovedRequest>({
    deviceList: s.array(s.string()),
  });
