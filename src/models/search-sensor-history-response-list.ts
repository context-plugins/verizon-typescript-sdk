import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchDeviceResponseSchema, type SearchDeviceResponse } from "./search-device-response.js";

/** A success response includes an array of all matching events. */
export type SearchSensorHistoryResponseList = {
  searchSensorHistory?: SearchDeviceResponse[];
};

export const searchSensorHistoryResponseListSchema: Schema<SearchSensorHistoryResponseList> =
  s.object<SearchSensorHistoryResponseList>({
    searchSensorHistory: s.optional(s.array(s.lazy(() => searchDeviceResponseSchema))),
    _keysMap: {
      searchSensorHistory: "SearchSensorHistory",
    },
  });
