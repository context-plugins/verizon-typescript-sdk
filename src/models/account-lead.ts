import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

/** A successful response returns an array of lead objects. */
export type AccountLead = {
  /** The customer address for the line's primary place of use, for line usage taxation. */
  address?: Address;
  /**
   * Unique number for each lead. Use this value in the leadId parameter when activating devices to
   * credit the activations to the lead.
   */
  leadId?: string;
  /** The current state of the lead, such as “Qualified” or “Closed.” */
  leadState?: string;
};

export const accountLeadSchema: Schema<AccountLead> = s.object<AccountLead>({
  address: s.optional(s.lazy(() => addressSchema)),
  leadId: s.optional(s.string()),
  leadState: s.optional(s.string()),
});
