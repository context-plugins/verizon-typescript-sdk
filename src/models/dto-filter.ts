import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoFilter = {
  expand?: string;
  limitnumber?: number;
  nopagination?: boolean;
  page?: string;
  pagenumber?: number;
  projection?: string[];
  selection?: Record<string, Record<string, unknown>>;
};

export const dtoFilterSchema: Schema<DtoFilter> = s.object<DtoFilter>({
  expand: s.optional(s.string()),
  limitnumber: s.optional(s.number()),
  nopagination: s.optional(s.boolean()),
  page: s.optional(s.string()),
  pagenumber: s.optional(s.number()),
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
