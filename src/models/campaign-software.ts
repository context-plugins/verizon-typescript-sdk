import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

/** Software upgrade information. */
export type CampaignSoftware = {
  /** Upgrade identifier. */
  id: string;
  /** Account identifier. */
  accountName: string;
  /** Campaign name. */
  campaignName?: string;
  /** Software name. */
  softwareName: string;
  /** LWM2M, OMD-DM or HTTP. */
  distributionType: string;
  /** Applicable make. */
  make: string;
  /** Applicable model. */
  model: string;
  /** Old software name. */
  softwareFrom: string;
  /** New software name. */
  softwareTo: string;
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /**
   * Specifies starting date client should download package. If null, client will download as soon
   * as possible.
   */
  downloadAfterDate?: string;
  /** List of allowed download time windows. */
  downloadTimeWindowList?: V2TimeWindow[];
  /** Client will install package after date. If null, client will install as soon as possible. */
  installAfterDate?: string;
  /** List of allowed install time windows. */
  installTimeWindowList?: V2TimeWindow[];
  /** Software upgrade status. */
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
