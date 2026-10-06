import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DevicesConsentResult = {
  /** Account identifier in "##########-#####". */
  accountName?: string;
  /** Exclude all devices or not? */
  allDevice?: boolean;
  /** Are there more devices to retrieve or not? */
  hasMoreData?: boolean;
  /** Total number of excluded devices in the account. */
  totalCount?: number;
  /** Last update time. */
  updateTime?: string;
  /** Device ID list. */
  exclusion?: string[];
};

export const devicesConsentResultSchema: Schema<DevicesConsentResult> = s.object<DevicesConsentResult>({
  accountName: s.optional(s.string()),
  allDevice: s.optional(s.boolean()),
  hasMoreData: s.optional(s.boolean()),
  totalCount: s.optional(s.int()),
  updateTime: s.optional(s.string()),
  exclusion: s.optional(s.array(s.string())),
});
