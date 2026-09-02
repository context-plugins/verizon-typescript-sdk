import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type AccountLead = {
  address?: Address;
  leadId?: string;
  leadState?: string;
};

export const accountLeadSchema: Schema<AccountLead> = s.object<AccountLead>({
  address: s.optional(s.lazy(() => addressSchema)),
  leadId: s.optional(s.string()),
  leadState: s.optional(s.string()),
});
