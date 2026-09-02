import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFilterSchema, type DtoFilter } from "./dto-filter.js";

export type DtoListDeviceExperienceHistoryRequest = {
  accountname?: string;
  filter?: DtoFilter;
};

export const dtoListDeviceExperienceHistoryRequestSchema: Schema<DtoListDeviceExperienceHistoryRequest> =
  s.object<DtoListDeviceExperienceHistoryRequest>({
    accountname: s.optional(s.string()),
    filter: s.optional(s.lazy(() => dtoFilterSchema)),
  });
