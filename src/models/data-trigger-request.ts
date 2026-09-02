import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DataTriggerRequest = {
  comparator?: string;
  threshold?: number;
  thresholdUnit?: string;
};

export const dataTriggerRequestSchema: Schema<DataTriggerRequest> = s.object<DataTriggerRequest>({
  comparator: s.optional(s.string()),
  threshold: s.optional(s.number()),
  thresholdUnit: s.optional(s.string()),
});
