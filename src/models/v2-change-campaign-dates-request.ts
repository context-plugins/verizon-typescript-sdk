import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v2TimeWindowSchema, type V2TimeWindow } from "./v2-time-window.js";

export type V2ChangeCampaignDatesRequest = {
  startDate: string;
  endDate: string;
  downloadAfterDate?: string;
  downloadTimeWindowList?: V2TimeWindow[];
  installAfterDate?: string;
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
