import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLeadSchema, type AccountLead } from "./account-lead.js";

export type AccountLeadsResult = {
  hasMoreData?: boolean;
  leads?: AccountLead[];
};

export const accountLeadsResultSchema: Schema<AccountLeadsResult> = s.object<AccountLeadsResult>({
  hasMoreData: s.optional(s.boolean()),
  leads: s.optional(s.array(s.lazy(() => accountLeadSchema))),
});
