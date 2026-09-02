import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1DeviceListItemSchema, type V1DeviceListItem } from "./v1-device-list-item.js";

export type V1LicensesAssignedRemovedResult = {
  accountName?: string;
  licCount?: number;
  licUsedCount?: number;
  deviceList?: V1DeviceListItem[];
};

export const v1LicensesAssignedRemovedResultSchema: Schema<V1LicensesAssignedRemovedResult> =
  s.object<V1LicensesAssignedRemovedResult>({
    accountName: s.optional(s.string()),
    licCount: s.optional(s.number()),
    licUsedCount: s.optional(s.number()),
    deviceList: s.optional(s.array(s.lazy(() => v1DeviceListItemSchema))),
  });
