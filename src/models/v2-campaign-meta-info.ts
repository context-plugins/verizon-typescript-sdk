import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

/** Campaign and campaign details. */
export type V2CampaignMetaInfo = {
  /** Account identifier. */
  accountName: string;
  /** Campaign identifier. */
  id: string;
  /** Campaign name. */
  campaignName?: string;
  /** Software name. */
  softwareName: string;
  /** LWM2M, OMD-DM or HTTP. */
  distributionType: string;
  /** Old software name. */
  softwareFrom: string;
  /** New software name. */
  softwareTo: string;
  /** Applicable make. */
  make: string;
  /** Applicable model. */
  model: string;
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
