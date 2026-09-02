import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SmsTriggerRequest = {
  comparator?: string;
  smsType?: string;
  threshold?: number;
};

export const smsTriggerRequestSchema: Schema<SmsTriggerRequest> = s.object<SmsTriggerRequest>({
  comparator: s.optional(s.string()),
  smsType: s.optional(s.string()),
  threshold: s.optional(s.number()),
});
