import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { historySearchFilterSchema, type HistorySearchFilter } from "./history-search-filter.js";
import { historySearchLimitTimeSchema, type HistorySearchLimitTime } from "./history-search-limit-time.js";

export type HistorySearchRequest = {
  filter: HistorySearchFilter;
  limitNumber?: number;
  limitTime?: HistorySearchLimitTime;
  page?: string;
};

export const historySearchRequestSchema: Schema<HistorySearchRequest> = s.object<HistorySearchRequest>({
  filter: historySearchFilterSchema,
  limitNumber: s.optional(s.number()),
  limitTime: s.optional(s.lazy(() => historySearchLimitTimeSchema)),
  page: s.optional(s.string()),
  _keysMap: {
    filter: "$filter",
    limitNumber: "$limitNumber",
    limitTime: "$limitTime",
    page: "$page",
  },
});
