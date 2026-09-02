import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dtoResourceidentifierSchema, type DtoResourceidentifier } from "./dto-resourceidentifier.js";
import { userSmartAlertSchema, type UserSmartAlert } from "./user-smart-alert.js";

export type DtoPatchSmartAlertRequest = {
  accountname?: string;
  resourceidentifier?: DtoResourceidentifier;
  smartalert?: UserSmartAlert;
};

export const dtoPatchSmartAlertRequestSchema: Schema<DtoPatchSmartAlertRequest> =
  s.object<DtoPatchSmartAlertRequest>({
    accountname: s.optional(s.string()),
    resourceidentifier: s.optional(s.lazy(() => dtoResourceidentifierSchema)),
    smartalert: s.optional(s.lazy(() => userSmartAlertSchema)),
  });
