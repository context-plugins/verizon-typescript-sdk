import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

/** New dates and time windows. */
export type V2ChangeCampaignDatesRequest = {
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /**
   * Specifies starting date client should download package. If null, client will download as soon
   * as possible.
   */
  downloadAfterDate?: string;
  /** List of allowed download time windows. Removing of existing windows is not allowed. */
  downloadTimeWindowList?: V2TimeWindow[];
  /** Client will install package after date. If null, client will install as soon as possible. */
  installAfterDate?: string;
  /** List of allowed install time windows. Removing of existing windows is not allowed. */
  installTimeWindowList?: V2TimeWindow[];
};

export const v2ChangeCampaignDatesRequestSchema: Schema<V2ChangeCampaignDatesRequest> =
  s.object<V2ChangeCampaignDatesRequest>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    downloadAfterDate: s.optional(s.dateOnly()),
    downloadTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
    installAfterDate: s.optional(s.dateOnly()),
    installTimeWindowList: s.optional(s.array(s.lazy(() => v2TimeWindowSchema))),
  });
