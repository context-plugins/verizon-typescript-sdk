import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type LocationReport = {
  devLocationList?: Location[];
  hasMoreData?: boolean;
  startIndex?: string;
  totalCount?: number;
  txid?: string;
};

export const locationReportSchema: Schema<LocationReport> = s.object<LocationReport>({
  devLocationList: s.optional(s.array(s.lazy(() => locationSchema))),
  hasMoreData: s.optional(s.boolean()),
  startIndex: s.optional(s.string()),
  totalCount: s.optional(s.number()),
  txid: s.optional(s.string()),
});
