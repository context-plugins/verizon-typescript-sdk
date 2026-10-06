import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3CampaignMetaInfoSchema, type V3CampaignMetaInfo } from "./v3-campaign-meta-info.js";

/** Campaign history. */
export type V3CampaignHistory = {
  /** Has more report flag? */
  hasMoreData: boolean;
  /** Campaign identifier. */
  lastSeenCampaignId?: string;
  /** Firmware upgrade list. */
  campaignList: V3CampaignMetaInfo[] | null;
};

export const v3CampaignHistorySchema: Schema<V3CampaignHistory> = s.object<V3CampaignHistory>({
  hasMoreData: s.boolean(),
  lastSeenCampaignId: s.optional(s.string()),
  campaignList: s.nullable(s.array(s.lazy(() => v3CampaignMetaInfoSchema))),
});
