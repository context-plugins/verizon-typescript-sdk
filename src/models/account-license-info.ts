import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountLicenseDeviceListItemSchema,
  type AccountLicenseDeviceListItem,
} from "./account-license-device-list-item.js";

/** Account license information. */
export type AccountLicenseInfo = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Number of monthly licenses in an MRC subscription. */
  totalLicenses?: number;
  /** Number of licenses currently assigned to devices. */
  assignedLicenses?: number;
  /** True if there are more devices to retrieve. */
  hasMoreData?: boolean;
  /** If hasMoreData=true, the startIndex to use for the next request. 0 if hasMoreData=false. */
  lastSeenDeviceId?: number;
  /**
   * The list of devices that have licenses assigned, including the date and time of when each
   * license was assigned.
   */
  deviceList?: AccountLicenseDeviceListItem[];
};

export const accountLicenseInfoSchema: Schema<AccountLicenseInfo> = s.object<AccountLicenseInfo>({
  accountName: s.optional(s.string()),
  totalLicenses: s.optional(s.int()),
  assignedLicenses: s.optional(s.int()),
  hasMoreData: s.optional(s.boolean()),
  lastSeenDeviceId: s.optional(s.int()),
  deviceList: s.optional(s.array(s.lazy(() => accountLicenseDeviceListItemSchema))),
});
