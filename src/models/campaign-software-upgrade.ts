import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

export type CampaignSoftwareUpgrade = {
  campaignName?: string;
  softwareName: string;
  softwareFrom: string;
  softwareTo: string;
  distributionType: string;
  startDate: string;
  endDate: string;
  downloadAfterDate?: string;
  downloadTimeWindowList?: V2TimeWindow[];
  installAfterDate?: string;
  installTimeWindowList?: V2TimeWindow[];
  deviceList: string[];
};

export const campaignSoftwareUpgradeSchema: Schema<CampaignSoftwareUpgrade> =
  s.object<CampaignSoftwareUpgrade>({
    campaignName: s.optional(s.string()),
    softwareName: s.string(),
    softwareFrom: s.string(),
    softwareTo: s.string(),
    distributionType: s.string(),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    downloadAfterDate: s.optional(s.dateOnly()),
    downloadTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
    installAfterDate: s.optional(s.dateOnly()),
    installTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
    deviceList: s.array(s.string()),
  });
