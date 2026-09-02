import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoFilterSchema, type DtoFilter } from "./dto-filter.js";
import { dtoResourceidentifierSchema, type DtoResourceidentifier } from "./dto-resourceidentifier.js";

export type DtoListSmartAlertsRequest = {
  accountname?: string;
  filter?: DtoFilter;
  resourceidentifier?: DtoResourceidentifier;
};

export const dtoListSmartAlertsRequestSchema: Schema<DtoListSmartAlertsRequest> =
  s.object<DtoListSmartAlertsRequest>({
    accountname: s.optional(s.string()),
    filter: s.optional(s.lazy(() => dtoFilterSchema)),
    resourceidentifier: s.optional(s.lazy(() => dtoResourceidentifierSchema)),
  });
