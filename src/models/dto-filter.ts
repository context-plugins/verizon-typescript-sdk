import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoFilter = {
  /** Use to provide device details for alerts specific to a device */
  expand?: string;
  /** Limit the number of results returned */
  limitnumber?: number;
  /** A flag set to show if pagination requested (false) or not (true) */
  nopagination?: boolean;
  page?: string;
  pagenumber?: number;
  /**
   * Limits the fields of the device that the user is interested in rather than all of the fields
   */
  projection?: string[];
  /** Filters results based on user defined criteria */
  selection?: Record<string, Record<string, unknown>>;
};

export const dtoFilterSchema: Schema<DtoFilter> = s.object<DtoFilter>({
  expand: s.optional(s.string()),
  limitnumber: s.optional(s.int()),
  nopagination: s.optional(s.boolean()),
  page: s.optional(s.string()),
  pagenumber: s.optional(s.int()),
  projection: s.optional(s.array(s.string())),
  selection: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    expand: "$expand",
    limitnumber: "$limitnumber",
    nopagination: "$nopagination",
    page: "$page",
    pagenumber: "$pagenumber",
    projection: "$projection",
    selection: "$selection",
  },
});
