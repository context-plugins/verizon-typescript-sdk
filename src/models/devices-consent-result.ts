import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DevicesConsentResult = {
  accountName?: string;
  allDevice?: boolean;
  hasMoreData?: boolean;
  totalCount?: number;
  updateTime?: string;
  exclusion?: string[];
};

export const devicesConsentResultSchema: Schema<DevicesConsentResult> = s.object<DevicesConsentResult>({
  accountName: s.optional(s.string()),
  allDevice: s.optional(s.boolean()),
  hasMoreData: s.optional(s.boolean()),
  totalCount: s.optional(s.number()),
  updateTime: s.optional(s.string()),
  exclusion: s.optional(s.array(s.string())),
});
