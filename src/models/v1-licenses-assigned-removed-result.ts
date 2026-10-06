import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1DeviceListItemSchema, type V1DeviceListItem } from "./v1-device-list-item.js";

/** License assignment or removal confirmation. */
export type V1LicensesAssignedRemovedResult = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Total number of monthly licenses in an MRC subscription. */
  licCount?: number;
  /** Number of licenses assigned to devices after the request completed. */
  licUsedCount?: number;
  /** A JSON object for each device that was in the request. */
  deviceList?: V1DeviceListItem[];
};

export const v1LicensesAssignedRemovedResultSchema: Schema<V1LicensesAssignedRemovedResult> =
  s.object<V1LicensesAssignedRemovedResult>({
    accountName: s.optional(s.string()),
    licCount: s.optional(s.int()),
    licUsedCount: s.optional(s.int()),
    deviceList: s.optional(s.array(s.lazy(() => v1DeviceListItemSchema))),
  });
