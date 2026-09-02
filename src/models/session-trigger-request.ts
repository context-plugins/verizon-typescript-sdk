import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionTriggerRequest = {
  comparator?: string;
  threshold?: number;
};

export const sessionTriggerRequestSchema: Schema<SessionTriggerRequest> = s.object<SessionTriggerRequest>({
  comparator: s.optional(s.string()),
  threshold: s.optional(s.number()),
});
