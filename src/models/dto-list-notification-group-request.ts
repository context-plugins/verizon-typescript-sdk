import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFilterSchema, type DtoFilter } from "./dto-filter.js";

export type DtoListNotificationGroupRequest = {
  accountname?: string;
  filter?: DtoFilter;
};

export const dtoListNotificationGroupRequestSchema: Schema<DtoListNotificationGroupRequest> =
  s.object<DtoListNotificationGroupRequest>({
    accountname: s.optional(s.string()),
    filter: s.optional(s.lazy(() => dtoFilterSchema)),
  });
