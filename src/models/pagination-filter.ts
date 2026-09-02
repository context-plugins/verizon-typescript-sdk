import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaginationFilter = {
  page: string;
};

export const paginationFilterSchema: Schema<PaginationFilter> = s.object<PaginationFilter>({
  page: s.string(),
  _keysMap: {
    page: "Page",
  },
});
