import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

export type CampaignSoftware = {
  id: string;
  accountName: string;
  campaignName?: string;
  softwareName: string;
  distributionType: string;
  make: string;
  model: string;
  softwareFrom: string;
  softwareTo: string;
  startDate: string;
  endDate: string;
  downloadAfterDate?: string;
  downloadTimeWindowList?: V2TimeWindow[];
  installAfterDate?: string;
  installTimeWindowList?: V2TimeWindow[];
  status: string;
};

export const campaignSoftwareSchema: Schema<CampaignSoftware> = s.object<CampaignSoftware>({
  id: s.string(),
  accountName: s.string(),
  campaignName: s.optional(s.string()),
  softwareName: s.string(),
  distributionType: s.string(),
  make: s.string(),
  model: s.string(),
  softwareFrom: s.string(),
  softwareTo: s.string(),
  startDate: s.dateOnly(),
  endDate: s.dateOnly(),
  downloadAfterDate: s.optional(s.dateOnly()),
  downloadTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
  installAfterDate: s.optional(s.dateOnly()),
  installTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
  status: s.string(),
});
