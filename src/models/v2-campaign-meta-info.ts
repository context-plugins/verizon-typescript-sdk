import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

export type V2CampaignMetaInfo = {
  accountName: string;
  id: string;
  campaignName?: string;
  softwareName: string;
  distributionType: string;
  softwareFrom: string;
  softwareTo: string;
  make: string;
  model: string;
  startDate: string;
  endDate: string;
  downloadAfterDate?: string;
  downloadTimeWindowList?: V2TimeWindow[];
  installAfterDate?: string;
  installTimeWindowList?: V2TimeWindow[];
  status: string;
};

export const v2CampaignMetaInfoSchema: Schema<V2CampaignMetaInfo> = s.object<V2CampaignMetaInfo>({
  accountName: s.string(),
  id: s.string(),
  campaignName: s.optional(s.string()),
  softwareName: s.string(),
  distributionType: s.string(),
  softwareFrom: s.string(),
  softwareTo: s.string(),
  make: s.string(),
  model: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  downloadAfterDate: s.optional(s.dateOnly()),
  downloadTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
  installAfterDate: s.optional(s.dateOnly()),
  installTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
  status: s.string(),
});
