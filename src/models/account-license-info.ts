import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountLicenseDeviceListItemSchema,
  type AccountLicenseDeviceListItem,
} from "./account-license-device-list-item.js";

export type AccountLicenseInfo = {
  accountName?: string;
  totalLicenses?: number;
  assignedLicenses?: number;
  hasMoreData?: boolean;
  lastSeenDeviceId?: number;
  deviceList?: AccountLicenseDeviceListItem[];
};

export const accountLicenseInfoSchema: Schema<AccountLicenseInfo> = s.object<AccountLicenseInfo>({
  accountName: s.optional(s.string()),
  totalLicenses: s.optional(s.number()),
  assignedLicenses: s.optional(s.number()),
  hasMoreData: s.optional(s.boolean()),
  lastSeenDeviceId: s.optional(s.number()),
  deviceList: s.optional(s.array(s.lazy(() => accountLicenseDeviceListItemSchema))),
});
