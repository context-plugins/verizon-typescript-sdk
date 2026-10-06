import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v3TimeWindowSchema, type V3TimeWindow } from "./v3-time-window.js";

/** Campaign dates and time windows. */
export type V3ChangeCampaignDatesRequest = {
  /** Campaign start date. */
  startDate: string;
  /** Campaign end date. */
  endDate: string;
  /** List of allowed campaign time windows. */
  campaignTimeWindowList?: V3TimeWindow[];
};

export const v3ChangeCampaignDatesRequestSchema: Schema<V3ChangeCampaignDatesRequest> =
  s.object<V3ChangeCampaignDatesRequest>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    campaignTimeWindowList: s.optional(s.array(s.lazy(() => v3TimeWindowSchema))),
  });
