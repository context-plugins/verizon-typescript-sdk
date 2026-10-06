import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLeadSchema, type AccountLead } from "./account-lead.js";

/** Returns information for all leads associated with an account. */
export type AccountLeadsResult = {
  /** False if no more leads.True if there is more data to be retrieved. */
  hasMoreData?: boolean;
  /** The leads associated with an account. */
  leads?: AccountLead[];
};

export const accountLeadsResultSchema: Schema<AccountLeadsResult> = s.object<AccountLeadsResult>({
  hasMoreData: s.optional(s.boolean()),
  leads: s.optional(s.array(s.lazy(() => accountLeadSchema))),
});
