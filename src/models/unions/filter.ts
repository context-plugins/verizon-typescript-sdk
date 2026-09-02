import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { devicesFilterSchema, type DevicesFilter } from "../devices-filter.js";
import { paginationFilterSchema, type PaginationFilter } from "../pagination-filter.js";

export type Filter = DevicesFilter | PaginationFilter;

export const filterSchema: Schema<Filter> = s.of<Filter>(
  s.union([s.lazy(() => devicesFilterSchema), s.lazy(() => paginationFilterSchema)]),
);
