import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3CampaignMetaInfoSchema, type V3CampaignMetaInfo } from "./v3-campaign-meta-info.js";

export type V3CampaignHistory = {
  hasMoreData: boolean;
  lastSeenCampaignId?: string;
  campaignList: V3CampaignMetaInfo[] | null;
};

export const v3CampaignHistorySchema: Schema<V3CampaignHistory> = s.object<V3CampaignHistory>({
  hasMoreData: s.boolean(),
  lastSeenCampaignId: s.optional(s.string()),
  campaignList: s.nullable(s.array(s.lazy(() => v3CampaignMetaInfoSchema))),
});
