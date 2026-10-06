import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination filter containing an opaque token for fetching the next/previous page of results. The
 * page token is returned in the response headers (X-Next, X-Prev) and should be passed as-is.
 */
export type PaginationFilter = {
  /**
   * Opaque pagination token for fetching the next/previous page of results. This is a encoded
   * string. Do not parse or modify; pass it as received.
   */
  page: string;
};

export const paginationFilterSchema: Schema<PaginationFilter> = s.object<PaginationFilter>({
  page: s.string(),
  _keysMap: {
    page: "Page",
  },
});
