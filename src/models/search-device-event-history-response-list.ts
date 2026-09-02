import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchDeviceResponseSchema, type SearchDeviceResponse } from "./search-device-response.js";

export type SearchDeviceEventHistoryResponseList = {
  searchDeviceEventHistory?: SearchDeviceResponse[];
};

export const searchDeviceEventHistoryResponseListSchema: Schema<SearchDeviceEventHistoryResponseList> =
  s.object<SearchDeviceEventHistoryResponseList>({
    searchDeviceEventHistory: s.optional(s.array(s.lazy(() => searchDeviceResponseSchema))),
    _keysMap: {
      searchDeviceEventHistory: "SearchDeviceEventHistory",
    },
  });
