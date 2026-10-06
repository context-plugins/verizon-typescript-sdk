import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

/** Location information for up to 1,000 devices. */
export type LocationReport = {
  /** Device location information. */
  devLocationList?: Location[];
  /** True if there are more device locations to retrieve. */
  hasMoreData?: boolean;
  /**
   * The zero-based number of the first record to return. Set startIndex=0 for the first request. If
   * there are more than 1,000 devices to be returned (hasMoreData=true), set startIndex=1000 for
   * the second request, 2000 for the third request, etc.
   */
  startIndex?: string;
  /** The total number of devices in the original request and in the report. */
  totalCount?: number;
  /** The transaction ID of the report. */
  txid?: string;
};

export const locationReportSchema: Schema<LocationReport> = s.object<LocationReport>({
  devLocationList: s.optional(s.array(s.lazy(() => locationSchema))),
  hasMoreData: s.optional(s.boolean()),
  startIndex: s.optional(s.string()),
  totalCount: s.optional(s.int()),
  txid: s.optional(s.string()),
});
