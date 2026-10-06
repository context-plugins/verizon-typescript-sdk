import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { historySearchFilterSchema, type HistorySearchFilter } from "./history-search-filter.js";
import { historySearchLimitTimeSchema, type HistorySearchLimitTime } from "./history-search-limit-time.js";

/** Used to filter data by time period or number of devices. */
export type HistorySearchRequest = {
  /** The selected device and attributes for which a request should retrieve data. */
  filter: HistorySearchFilter;
  /**
   * The maximum number of historical attributes to include in the response. If the request matches
   * more than this number of attributes, the response will contain an X-Next value in the header
   * that can be used as the page value in the next request to retrieve the next page of events.
   */
  limitNumber?: number;
  /**
   * The time period for which a request should retrieve data, beginning with the limitTime.startOn
   * and proceeding with the limitTime.duration.
   */
  limitTime?: HistorySearchLimitTime;
  /** Page number for pagination purposes. */
  page?: string;
};

export const historySearchRequestSchema: Schema<HistorySearchRequest> = s.object<HistorySearchRequest>({
  filter: historySearchFilterSchema,
  limitNumber: s.optional(s.int()),
  limitTime: s.optional(s.lazy(() => historySearchLimitTimeSchema)),
  page: s.optional(s.string()),
  _keysMap: {
    filter: "$filter",
    limitNumber: "$limitNumber",
    limitTime: "$limitTime",
    page: "$page",
  },
});
