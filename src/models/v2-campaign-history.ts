import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2CampaignMetaInfoSchema, type V2CampaignMetaInfo } from "./v2-campaign-meta-info.js";

export type V2CampaignHistory = {
  hasMoreData: boolean;
  lastSeenCampaignId?: string;
  campaignList: V2CampaignMetaInfo[] | null;
};

export const v2CampaignHistorySchema: Schema<V2CampaignHistory> = s.object<V2CampaignHistory>({
  hasMoreData: s.boolean(),
  lastSeenCampaignId: s.optional(s.string()),
  campaignList: s.nullable(s.array(s.lazy(() => v2CampaignMetaInfoSchema))),
});
