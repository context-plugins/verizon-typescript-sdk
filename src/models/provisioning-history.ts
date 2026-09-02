import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldsSchema, type CustomFields } from "./custom-fields.js";

export type ProvisioningHistory = {
  occurredAt?: string;
  status?: string;
  eventBy?: string;
  eventType?: string;
  mdn?: string;
  msisdn?: string;
  servicePlan?: string;
  extendedAttributes?: CustomFields[];
};

export const provisioningHistorySchema: Schema<ProvisioningHistory> = s.object<ProvisioningHistory>({
  occurredAt: s.optional(s.string()),
  status: s.optional(s.string()),
  eventBy: s.optional(s.string()),
  eventType: s.optional(s.string()),
  mdn: s.optional(s.string()),
  msisdn: s.optional(s.string()),
  servicePlan: s.optional(s.string()),
  extendedAttributes: s.optional(s.array(s.lazy(() => customFieldsSchema))),
});
