import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

/** Software upgrade information. */
export type CampaignSoftwareUpgrade = {
  /** Campaign name. */
  campaignName?: string;
  /** Software name to upgrade to. */
  softwareName: string;
  /** Old software name. */
  softwareFrom: string;
  /** New software name. */
  softwareTo: string;
  /** OMA or HTTP. */
  distributionType: string;
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
  /** Device IMEI list. */
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
